import { PackageDurationMonths, PackageType } from "data/enums/package";


type Package = {
  id: string;
  enabled: boolean;
  name: string;
  packageType: PackageType;
  durationMonths: PackageDurationMonths;
  price: number;
  userId?: string;
  company?: string;
  createdAt?: string;
};

type AddPackageDto = Omit<Package, 'id' | 'enabled'>;

type UpdatePackageDto = Omit<Package, 'enabled' | 'userId' | 'company'>;

type DeletePackageDto = Pick<Package, 'id' | 'name'>;

type DisablePackageDto = Pick<Package, 'id' | 'enabled'>;

type ListPackageDto = Pick<Package, 'company'>;

export type {
  AddPackageDto,
  UpdatePackageDto,
  DeletePackageDto,
  ListPackageDto,
  DisablePackageDto,
  Package,
};
