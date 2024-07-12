import { Breadcrumb } from "react-bootstrap";

interface CustomBreadcrumbsProps {
  type: string;
  name: string;
  path: string;
}

const CustomBreadcrumbs = ({ type, name, path }: CustomBreadcrumbsProps) => {
  return (
    <Breadcrumb className="mb-3 mt-3">
      <Breadcrumb.Item href={path}>{type}</Breadcrumb.Item>
      <Breadcrumb.Item active>{name}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default CustomBreadcrumbs;
