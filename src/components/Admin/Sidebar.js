import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src="" alt="Ecommerce" />
      </Link>
      <Link to="/admin/dashboard" className="sidebar-link">
        <DashboardIcon className="sidebar-icon" />
        <p>Dashboard</p>
      </Link>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ImportExportIcon />}
      >
        <TreeItem
          nodeId="1"
          label={
            <p className="sidebar-link">
              <PostAddIcon className="sidebar-icon" />
              label={<span>Products</span>}
           
            </p>
          }
        >
          <Link to="/admin/products" className="sidebar-link">
            <TreeItem
              nodeId="2"
              label={<span className="sidebar-tree-item">All</span>}
              icon={<PostAddIcon className="sidebar-icon" />}
            />
          </Link>
          <Link to="/admin/product" className="sidebar-link">
            <TreeItem
              nodeId="3"
              label={<span className="sidebar-tree-item">Create</span>}
              icon={<AddIcon className="sidebar-icon" />}
            />
          </Link>
        </TreeItem>
      </TreeView>
      <Link to="/admin/orders" className="sidebar-link">
        <ListAltIcon className="sidebar-icon" />
        <p>Orders</p>
      </Link>
      <Link to="/admin/users" className="sidebar-link">
        <PeopleIcon className="sidebar-icon" />
        <p>Users</p>
      </Link>
      <Link to="/admin/reviews" className="sidebar-link">
        <RateReviewIcon className="sidebar-icon" />
        <p>Reviews</p>
      </Link>
    </div>
  );
};

export default Sidebar;
