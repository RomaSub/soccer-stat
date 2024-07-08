import { Breadcrumb } from "react-bootstrap";

const CustomBreadcrumbs = ({ type, name, path }) => {
  return (
    <Breadcrumb className="mb-3 mt-3">
      <Breadcrumb.Item href={path} >{type}</Breadcrumb.Item>
      <Breadcrumb.Item active>{name}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default CustomBreadcrumbs;
