/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Certificate } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CertificateUpdateForm(props) {
  const {
    id: idProp,
    certificate: certificateModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    issuedDate: "",
    orgName: "",
    orgLogo: "",
    url: "",
    pinned: false,
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [issuedDate, setIssuedDate] = React.useState(initialValues.issuedDate);
  const [orgName, setOrgName] = React.useState(initialValues.orgName);
  const [orgLogo, setOrgLogo] = React.useState(initialValues.orgLogo);
  const [url, setUrl] = React.useState(initialValues.url);
  const [pinned, setPinned] = React.useState(initialValues.pinned);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = certificateRecord
      ? { ...initialValues, ...certificateRecord }
      : initialValues;
    setTitle(cleanValues.title);
    setIssuedDate(cleanValues.issuedDate);
    setOrgName(cleanValues.orgName);
    setOrgLogo(cleanValues.orgLogo);
    setUrl(cleanValues.url);
    setPinned(cleanValues.pinned);
    setErrors({});
  };
  const [certificateRecord, setCertificateRecord] =
    React.useState(certificateModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Certificate, idProp)
        : certificateModelProp;
      setCertificateRecord(record);
    };
    queryData();
  }, [idProp, certificateModelProp]);
  React.useEffect(resetStateValues, [certificateRecord]);
  const validations = {
    title: [{ type: "Required" }],
    issuedDate: [{ type: "Required" }],
    orgName: [{ type: "Required" }],
    orgLogo: [{ type: "Required" }],
    url: [{ type: "Required" }],
    pinned: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          issuedDate,
          orgName,
          orgLogo,
          url,
          pinned,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Certificate.copyOf(certificateRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CertificateUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              issuedDate,
              orgName,
              orgLogo,
              url,
              pinned,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Issued date"
        isRequired={true}
        isReadOnly={false}
        value={issuedDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              issuedDate: value,
              orgName,
              orgLogo,
              url,
              pinned,
            };
            const result = onChange(modelFields);
            value = result?.issuedDate ?? value;
          }
          if (errors.issuedDate?.hasError) {
            runValidationTasks("issuedDate", value);
          }
          setIssuedDate(value);
        }}
        onBlur={() => runValidationTasks("issuedDate", issuedDate)}
        errorMessage={errors.issuedDate?.errorMessage}
        hasError={errors.issuedDate?.hasError}
        {...getOverrideProps(overrides, "issuedDate")}
      ></TextField>
      <TextField
        label="Org name"
        isRequired={true}
        isReadOnly={false}
        value={orgName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              issuedDate,
              orgName: value,
              orgLogo,
              url,
              pinned,
            };
            const result = onChange(modelFields);
            value = result?.orgName ?? value;
          }
          if (errors.orgName?.hasError) {
            runValidationTasks("orgName", value);
          }
          setOrgName(value);
        }}
        onBlur={() => runValidationTasks("orgName", orgName)}
        errorMessage={errors.orgName?.errorMessage}
        hasError={errors.orgName?.hasError}
        {...getOverrideProps(overrides, "orgName")}
      ></TextField>
      <TextField
        label="Org logo"
        isRequired={true}
        isReadOnly={false}
        value={orgLogo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              issuedDate,
              orgName,
              orgLogo: value,
              url,
              pinned,
            };
            const result = onChange(modelFields);
            value = result?.orgLogo ?? value;
          }
          if (errors.orgLogo?.hasError) {
            runValidationTasks("orgLogo", value);
          }
          setOrgLogo(value);
        }}
        onBlur={() => runValidationTasks("orgLogo", orgLogo)}
        errorMessage={errors.orgLogo?.errorMessage}
        hasError={errors.orgLogo?.hasError}
        {...getOverrideProps(overrides, "orgLogo")}
      ></TextField>
      <TextField
        label="Url"
        isRequired={true}
        isReadOnly={false}
        value={url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              issuedDate,
              orgName,
              orgLogo,
              url: value,
              pinned,
            };
            const result = onChange(modelFields);
            value = result?.url ?? value;
          }
          if (errors.url?.hasError) {
            runValidationTasks("url", value);
          }
          setUrl(value);
        }}
        onBlur={() => runValidationTasks("url", url)}
        errorMessage={errors.url?.errorMessage}
        hasError={errors.url?.hasError}
        {...getOverrideProps(overrides, "url")}
      ></TextField>
      <SwitchField
        label="Pinned"
        defaultChecked={false}
        isDisabled={false}
        isChecked={pinned}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              issuedDate,
              orgName,
              orgLogo,
              url,
              pinned: value,
            };
            const result = onChange(modelFields);
            value = result?.pinned ?? value;
          }
          if (errors.pinned?.hasError) {
            runValidationTasks("pinned", value);
          }
          setPinned(value);
        }}
        onBlur={() => runValidationTasks("pinned", pinned)}
        errorMessage={errors.pinned?.errorMessage}
        hasError={errors.pinned?.hasError}
        {...getOverrideProps(overrides, "pinned")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || certificateModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || certificateModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
