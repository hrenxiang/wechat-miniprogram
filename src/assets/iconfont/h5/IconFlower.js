/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconFlower = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M657.381 614.562l11.453 3.18c35.382 11.21 139.452 67.368 48.882 202.186-155.405 46.834-178.5-74.672-178.769-106.28l-0.512-12.747h-52.951l-0.512 12.746c-0.27 31.61-23.364 153.142-178.77 106.28-90.57-134.817 13.475-190.975 48.883-202.186l11.453-3.18-16.815-50.795-12.261 3.422c-30.127 9.513-152.873 25.034-156.268-137.243 100.298-127.73 185.83-46.08 207.414-15.872l6.548 9.917 43.601-31.69-7.491-10.294c-18.567-25.573-72.165-137.081 80.68-191.704 152.926 54.65 102.589 161.658 80.761 191.704l-6.979 9.593 43.008 32.364 6.548-9.917c21.585-30.208 107.116-111.858 207.387 15.872-3.395 162.277-126.14 146.756-156.268 137.243l-12.26-3.422-16.762 50.823z"
        fill={getIconColor(color, 0, '#FFBDD8')}
      />
      <path
        d="M993.091 453.605l-21.019 64.755c-23.956 73.674-68.58 105.552-101.834 119.35-8.811 3.664-18.054 6.52-27.567 8.65 36.622 41.04 55.108 100.729 29.508 179.55l-20.992 64.781-68.851 20.184-40.448 59.15h-68.15c-82.863 0-133.901-36.03-161.657-83.564-27.729 47.535-78.794 83.59-161.711 83.59h-68.123l-40.421-59.15-68.797-20.156-21.046-64.754c-25.68-79.01-6.898-138.644 29.858-179.74a165.592 165.592 0 0 1-27.972-8.542c-33.226-13.77-77.904-45.621-101.834-119.269L30.99 453.66l43.79-56.751-2.102-71.626 55.107-40.044c44.41-32.283 86.744-43.305 124.955-40.825 0.35 18.701 3.1 37.214 7.869 55.296-28.268-4.932-62.302 0.862-101.187 29.13l-32.095 23.31 1.806 62.436-38.185 49.449 12.261 37.726c14.12 43.44 38.077 72.435 71.195 86.124 28.268 11.722 63.246 11.803 98.6 0.35L401.14 546.6l16.653 51.254-128.135 41.634c-30.046 9.755-125.143 50.904-86.474 169.795l12.261 37.7 59.985 17.57 35.247 51.577h39.64c125.009 0 134.737-103.128 134.737-134.737V646.656h53.894v134.737c0.027 31.61 9.81 134.71 134.71 134.71h39.748l35.247-51.578 59.985-17.57 12.234-37.726c37.888-116.682-52.979-158.45-84.777-169.175l-1.724-0.566-128.162-41.634 16.977-51.146 127.838 41.5 1.806 0.592c34.762 10.887 69.012 10.617 96.795-0.916 33.118-13.743 57.074-42.712 71.195-86.178l12.234-37.726-38.185-49.476 1.806-62.437-32.122-23.336c-101.133-73.459-169.58 4.258-188.173 29.858l-79.171 108.948-43.601-31.663 0.539-0.7 78.686-108.33c21.827-30.046 32.525-63.38 30.1-93.857-2.802-35.732-22.986-67.476-59.958-94.316l-32.067-23.31L512 136.409l-58.826-21.02-32.067 23.31C320 212.184 372.736 301.352 391.303 326.925L470.5 435.901l-43.6 31.69-79.2-108.975c-51.118-70.414-70.844-181.68 41.742-263.492l55.108-40.044L512 79.171l67.53-24.144 55.08 40.043c62.653 45.514 79.172 97.82 82.001 133.686 0.755 9.54 0.62 19.24-0.296 28.996 50.365-22.178 112.829-21.316 179.9 27.405l55.135 40.044-2.075 71.653 43.816 56.751zM512 504.643a34.304 34.304 0 1 0 0 68.608 34.304 34.304 0 0 0 0-68.608z m29.67-181.275a29.642 29.642 0 1 1-59.34-0.053 29.642 29.642 0 0 1 59.34 0.053z m121.047 372.575a29.67 29.67 0 1 1-47.967 34.762 29.67 29.67 0 0 1 47.967-34.762zM316.12 444.12a29.642 29.642 0 1 1-18.379 56.427 29.642 29.642 0 0 1 18.379-56.427z m391.76 0.027a29.67 29.67 0 1 1 18.298 56.454 29.67 29.67 0 0 1-18.298-56.454zM361.283 695.943a29.67 29.67 0 0 1 47.994 34.843 29.642 29.642 0 1 1-47.994-34.843z"
        fill={getIconColor(color, 1, '#231F20')}
      />
    </svg>
  );
};

IconFlower.defaultProps = {
  size: 18,
};

export default IconFlower;