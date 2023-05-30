import React, { useState } from "react";
import "./vHeader.css";
import * as common from "../../../lib/common";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { HOST_URL } from "../../../lib/HostUrl";
import PublicIcon from "@mui/icons-material/Public";
import PublicOffIcon from "@mui/icons-material/PublicOff";

const ITEM_HEIGHT = 48;
const options = ["숨김", "수정", "삭제"];

const VHeader = ({ videoItem }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const clickOption = (option, boardId) => {
    if (option.target.innerText === "삭제") {
      axios.delete(`${HOST_URL}/api/v1/boards/${boardId}`).then((respone) => {
        if (respone.status === 200) {
          window.location.reload();
        }
      });
    } else if (option.target.innerText === "숨김") {
      axios
        .patch(`${HOST_URL}/api/v1/boards/${boardId}/hide`)
        .then((response) => {
          if (response.status === 200) {
            window.location.reload();
          }
        });
    } else {
      navigate(`/manage/${boardId}`);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!videoItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="videoHeader-container">
      <div className="videoHeader-title">
        <h2>{videoItem.title}</h2>
        {videoItem.auth ? (
          <div>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  selected={option === "Pyxis"}
                  onClick={(option) => {
                    clickOption(option, videoItem.id);
                  }}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
            {videoItem.public ? <PublicIcon /> : <PublicOffIcon />}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="videoHeader-info">
        <div className="category-box">
          <p>{videoItem.category1}</p>
          <p>{videoItem.category2}</p>
        </div>
        <div className="createAt">
          <p>{common.publishedDate(videoItem.created_at)}</p>
        </div>
      </div>
    </div>
  );
};

export default VHeader;
