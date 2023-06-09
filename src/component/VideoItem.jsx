import React, { useState } from "react";
import "./videoItem.css";
import { Link, useNavigate } from "react-router-dom";
import * as common from "./../lib/common";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import axios from "axios";
import { HOST_URL } from "../lib/HostUrl";

const ITEM_HEIGHT = 48;
const options = ["숨김", "수정", "삭제"];

const VideoItem = ({ videoItem }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

  return (
    <li className={`videoItem`}>
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
        </div>
      ) : (
        <></>
      )}
      <Link to={`/watch/${videoItem.id}`}>
        <div className="item">
          <div className="thumnail">
            <img
              className="thumnail-img"
              src={videoItem.thumbnail_url}
              alt="videoThumnail"
            />
          </div>
          <div className="metaData">
            <Link to={`/profile/@${videoItem.nickname}`}>
              <div className="channelImg-box">
                <img
                  className="channelImg"
                  src={videoItem.thumbnail_url}
                  alt="channelImg-thum"
                />
              </div>
            </Link>
            <div className="infoText-box">
              <span className="infoText">
                <p className="title">{videoItem.title}</p>
                <span>
                  <p className="category">{videoItem.category1}</p>
                  <p className="category">{videoItem.category2}</p>
                </span>
              </span>
              <span className="infoText">
                <p className="channel">{videoItem.nickname}</p>
                <p className="publishDate">
                  {common.publishedDate(videoItem.created_at)}
                </p>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default VideoItem;
