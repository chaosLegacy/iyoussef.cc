import Head from "next/head";
import { useEffect, useState } from "react";
import { getAuthorData } from "@data/content/user";
import { useActiveRouteInfo } from "@hooks";
import type { Metadata } from 'next'

type Props = {
    title: string;
    description: string;
    previewImage?: string;
    keywords?: string;
    suffix?: string;
};

const getFaviconPath = (isDarkMode: boolean = true): string => {
    return `/favicon-${isDarkMode ? "dark" : "light"}.ico`;
};

export default function MetaData({
    title,
    description,
    previewImage,
    keywords,
    suffix,
}: Props) {
    const { name } = getAuthorData();
    const { routePath } = useActiveRouteInfo();
    const [faviconHref, setFaviconHref] = useState("/favicon-dark.ico");
    useEffect(() => {
        // Get current color scheme.
        const matcher = window.matchMedia("(prefers-color-scheme: dark)");
        // Set favicon initially.
        setFaviconHref(getFaviconPath(matcher.matches));
        // Change favicon if the color scheme changes.
        matcher.onchange = () => setFaviconHref(getFaviconPath(matcher.matches));
    }, [faviconHref]);

    return (
        <Head>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1"
            />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="description" content={description || name} />
            <title>{title + (suffix ? ` - ${suffix}` : "")}</title>
            <meta name="theme-color" content="#000" />
            <link rel="shortcut icon" href={faviconHref} sizes="any" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="apple-touch-icon" href="/icons/icon-192x192.png"></link>
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="author" content={name}></meta>
            <meta name="robots" content="index,follow" />
            <meta
                name="keywords"
                content={`${keywords || ""} ${name}`}
            />

            {/* Og */}
            <meta property="og:title" content={`${title || ""} ${name}`} />
            <meta property="og:description" content={description || name} />
            <meta property="og:site_name" content={name} />
            <meta property="og:url" content={routePath} key="ogurl" />
            <meta property="og:image" content={previewImage || ""} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@chaoslegacy" />
            <meta name="twitter:title" content={`${title || ""} ${name}`} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={previewImage || ""} />
            <meta name="twitter:image:alt" content={title || name}></meta>
            <meta name="twitter:domain" content={routePath} />
        </Head>
    );
}

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}