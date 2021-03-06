import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import styles from "./styles/ColorBoxStyles"
import clsx from "clsx";


const ColorBox = ({ background, name, moreUrl, showingFullPalette }) => {
  const classes = styles({background, showingFullPalette})
  const [copied, setCopied] = useState(false);

  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background }} className={classes.ColorBox}>
        <div
          style={{ background }}
          className={clsx(classes.copyOverlay, {[classes.showOverlay]: copied})}
        />
        <div className={clsx(classes.copyMessage, {[classes.showMessage]: copied})}>
          <h1>copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <button className={classes.copyButton}>Copy</button>
        </div>
        {showingFullPalette && (
          <Link to={moreUrl} onClick={e => e.stopPropagation()}>
            <span className={classes.seeMore}>MORE</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
