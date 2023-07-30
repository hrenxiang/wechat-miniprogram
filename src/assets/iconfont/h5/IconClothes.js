/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconClothes = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1282 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M1271.884632 311.442305c-53.694997-81.364481-187.882492-221.869857-427.156025-299.324411-26.689502-8.727837-55.68496-2.861947-75.655587 17.456674C723.686867 75.956702 653.861171 137.927545 560.574913 37.011429 531.30046 5.36302 471.547575-1.811846 434.244272 18.699771 226.130158 119.055897 56.20933 259.527274 56.471326 334.326877c-0.260995 134.710485 141.850351 175.436724 162.727961 169.727831s75.376593-78.553533 75.376593-78.553533c14.069737-14.662726 38.124288-4.27692 38.124288 16.479692v404.270452c0 93.688251 73.508627 170.337819 163.33895 170.337819h259.645152c131.428546 0 248.089368 22.48458 248.089368-258.719169V439.081922c0-20.738613 24.054551-31.142419 38.124288-16.461693 0 0 46.661129 75.934582 78.064542 81.433479 29.675446 5.236902 152.777147-45.00216 162.343969-150.525189a65.740772 65.740772 0 0 0-10.421805-42.087214z"
        fill={getIconColor(color, 0, '#FFF6B3')}
      />
      <path
        d="M759.246203 1023.991c-8.536841 0-17.15968-0.104998-25.871516-0.209996s-18.049663-0.208996-27.161493-0.208996H446.551042c-93.915246 0-170.30382-79.548515-170.30382-177.320689V441.910869a15.972702 15.972702 0 0 0-9.949814-15.257715 14.296733 14.296733 0 0 0-15.885704 3.334937c-9.967814 13.319751-56.977936 74.817603-78.850527 80.787492-15.273715 4.189922-64.203801-9.251827-103.167074-39.049271C37.112687 447.810759-0.138617 404.552566 0.00038 334.308878c-0.121998-38.071289 40.14925-92.622271 113.273885-153.614132C184.846929 121.167858 280.035151 61.432973 381.560256 12.502887c41.197231-22.51958 104.058057-13.301752 134.657485 19.77763 31.562411 34.144362 62.948825 51.671035 93.288258 52.107027 40.515244 0.610989 74.43261-28.349471 105.104038-59.682885 21.139605-21.593597 52.857013-28.977459 82.794454-19.28964 273.1219 88.398349 398.807554 253.588265 430.821956 302.116359a72.932638 72.932638 0 0 1 11.503785 46.556131c-5.079905 56.331948-40.324247 94.351238-68.987712 116.311828-38.159287 29.274453-82.393462 43.780183-101.456106 40.463244-32.729389-5.725893-75.724586-73.211633-82.393461-83.964432a14.313733 14.313733 0 0 0-15.709707-3.141941 15.989701 15.989701 0 0 0-9.950814 15.256715v318.857046c0 114.07687-18.608653 185.612534-58.583906 225.185796-37.076308 36.589317-88.136354 40.935236-143.403323 40.935235zM260.727512 411.571435a29.082457 29.082457 0 0 1 10.787798 2.111961 30.129437 30.129437 0 0 1 18.695651 28.227473v404.34045c0 90.074318 70.13869 163.35595 156.339081 163.35595h259.662152c9.199828 0 18.416656 0.103998 27.31949 0.209996 64.744791 0.784985 120.639747 1.447973 159.323025-36.763314 36.659316-36.205324 54.445983-106.58801 54.445983-215.183982V439.081922a30.094438 30.094438 0 0 1 18.696651-28.209474 28.279472 28.279472 0 0 1 31.420413 6.98187l0.523991 0.54099 0.383992 0.628988c12.533766 20.389619 50.117064 74.154615 73.316631 78.20454 12.079774 2.111961 52.649017-8.728837 90.563309-37.759295 26.446506-20.283621 58.9329-55.212969 63.558814-106.483012a58.8979 58.8979 0 0 0-9.251828-37.618298c-31.421413-47.568112-154.663112-209.476089-423.455093-296.512463-24.875536-8.04685-51.112046-2.006963-68.516721 15.710707-32.852387 33.569373-69.528702 64.588794-115.210848 63.889807-34.319359-0.487991-69.09271-19.533635-103.35907-56.575944-26.184511-28.349471-82.376462-36.43132-117.8298-16.949684l-0.331994 0.174997c-100.618121 48.441096-194.93436 107.547992-265.615041 166.340894C53.294385 248.808474 13.843122 300.863502 13.966119 334.239879c-0.122998 64.588794 34.144362 104.336052 62.842827 126.348641 38.909273 29.675446 82.864453 38.910273 90.999301 36.659315 13.528747-3.701931 51.112046-48.617092 71.570663-76.058579l0.55899-0.644988a28.523467 28.523467 0 0 1 20.789612-8.972833z"
        fill={getIconColor(color, 1, '#323333')}
      />
      <path
        d="M620.013803 279.304905c-115.997834 0-210.366072-90.772305-210.366072-202.493219a194.795363 194.795363 0 0 1 13.772743-72.146653 6.98287 6.98287 0 1 1 12.969758 5.149904 181.074619 181.074619 0 0 0-12.777762 67.048748c0 103.935059 88.102355 188.52848 196.401333 188.52848S816.415136 180.833743 816.415136 76.863685a181.54561 181.54561 0 0 0-7.837854-52.875013 6.98287 6.98287 0 0 1 13.353751-4.066924 195.510349 195.510349 0 0 1 8.448842 56.941937c0 111.615916-94.368238 202.44122-210.366072 202.44122z"
        fill={getIconColor(color, 2, '#323333')}
      />
      <path
        d="M489.685237 607.640774V484.521073h40.655241a94.26424 94.26424 0 0 1 21.035607 1.745967 39.224268 39.224268 0 0 1 17.299677 8.919834 50.152064 50.152064 0 0 1 13.963739 21.034607 85.728399 85.728399 0 0 1 4.625914 29.274454 89.393331 89.393331 0 0 1-3.141942 24.857535 61.708848 61.708848 0 0 1-7.942851 17.840667 43.641185 43.641185 0 0 1-10.7528 11.171792 42.663203 42.663203 0 0 1-14.086737 6.179884 77.610551 77.610551 0 0 1-18.975645 2.094961z m15.623708-14.523729h25.206529a59.054897 59.054897 0 0 0 18.311658-2.269957 26.184511 26.184511 0 0 0 10.595803-6.388881 39.416264 39.416264 0 0 0 8.727837-15.569709 79.513515 79.513515 0 0 0 3.089942-23.723557q0-19.324639-6.074887-29.676446t-14.767724-13.964739q-6.283883-2.513953-20.214623-2.513953h-24.874535z m98.802155-45.439151q0-30.670427 15.710707-48.004104t40.743239-17.334676a54.847976 54.847976 0 0 1 29.48345 8.134848 52.369022 52.369022 0 0 1 20.004626 22.693576 76.371574 76.371574 0 0 1 6.895871 33.044383 75.148597 75.148597 0 0 1-7.261864 33.516374 50.623055 50.623055 0 0 1-20.529617 22.379583 56.802939 56.802939 0 0 1-28.662465 7.592858 54.11499 54.11499 0 0 1-29.797443-8.396843 53.224006 53.224006 0 0 1-19.900629-22.919573 72.059655 72.059655 0 0 1-6.685875-30.706426z m16.0947 0.244995q0 22.256584 11.486785 35.069345a38.892274 38.892274 0 0 0 57.814921-0.121997q11.381787-12.934758 11.399787-36.658316a65.408779 65.408779 0 0 0-4.870909-26.184511 38.631279 38.631279 0 0 0-14.261734-17.456674 37.409301 37.409301 0 0 0-21.052607-6.179885 39.10227 39.10227 0 0 0-28.680464 11.853779q-11.887778 11.887778-11.905778 39.678259z m172.119786 11.433787v-14.45373l50.012066-0.087999v45.701147a88.224353 88.224353 0 0 1-23.758556 14.401731 68.078729 68.078729 0 0 1-25.136531 4.81791 64.675792 64.675792 0 0 1-31.59641-7.768855 50.257062 50.257062 0 0 1-21.470599-22.46558 73.141634 73.141634 0 0 1-7.244865-32.835387 78.762529 78.762529 0 0 1 7.139867-33.551374 49.192081 49.192081 0 0 1 20.807611-23.164567 62.842827 62.842827 0 0 1 31.159418-7.557859 59.525889 59.525889 0 0 1 23.094569 4.345919 38.404283 38.404283 0 0 1 16.234697 12.062774 54.708978 54.708978 0 0 1 8.937833 20.144624l-14.087737 4.031925a46.364134 46.364134 0 0 0-6.615876-14.767724 27.162493 27.162493 0 0 0-11.25979-8.623839 40.045252 40.045252 0 0 0-16.268696-3.22994 46.102139 46.102139 0 0 0-18.520654 3.404937 34.616354 34.616354 0 0 0-12.603765 8.937833 42.942198 42.942198 0 0 0-7.453861 12.219771 66.909751 66.909751 0 0 0-4.520915 24.769538q0 16.479692 5.445898 27.546486a35.680334 35.680334 0 0 0 15.815705 16.478692 47.464114 47.464114 0 0 0 22.204585 5.323901 56.278949 56.278949 0 0 0 34.459357-12.759762v-22.920572z"
        fill={getIconColor(color, 3, '#F7DA5E')}
      />
      <path
        d="M456.691853 607.640774V484.521073h40.67424a94.037244 94.037244 0 0 1 20.947609 1.745967 39.381265 39.381265 0 0 1 17.316677 8.814836 50.117064 50.117064 0 0 1 13.964739 21.035607 85.728399 85.728399 0 0 1 4.625914 29.273454 90.092318 90.092318 0 0 1-3.054943 24.858535 61.253856 61.253856 0 0 1-8.06485 17.927666 43.39619 43.39619 0 0 1-10.752799 11.171791 42.663203 42.663203 0 0 1-14.087737 6.179885 77.453554 77.453554 0 0 1-18.957646 2.093961z m15.624708-14.523729h25.206529a59.176895 59.176895 0 0 0 18.329658-2.269957 26.184511 26.184511 0 0 0 10.577803-6.388881 39.207268 39.207268 0 0 0 8.727837-15.569709 78.902527 78.902527 0 0 0 3.107942-23.723557q0-19.324639-6.092887-29.676446t-14.767724-13.964739q-6.283883-2.513953-20.214622-2.513953h-24.874536z m98.732156-45.439151q0-30.670427 15.710707-48.004104t40.760239-17.334676a54.742978 54.742978 0 0 1 29.46645 8.134848 52.369022 52.369022 0 0 1 20.005626 22.693576 76.371574 76.371574 0 0 1 6.98187 33.044383 75.376593 75.376593 0 0 1-7.243865 33.516374 50.728053 50.728053 0 0 1-20.546616 22.379583 56.802939 56.802939 0 0 1-28.663465 7.592858 54.11499 54.11499 0 0 1-29.797444-8.396843 53.189007 53.189007 0 0 1-19.882628-22.919573 71.815659 71.815659 0 0 1-6.789874-30.706426z m16.1127 0.244995q0 22.256584 11.468785 35.069345a38.909273 38.909273 0 0 0 57.832921-0.121997q11.398787-12.934758 11.380787-36.658316a65.408779 65.408779 0 0 0-4.869909-26.184511 38.596279 38.596279 0 0 0-14.244734-17.456674 37.4963 37.4963 0 0 0-21.069607-6.179885 39.067271 39.067271 0 0 0-28.541467 11.888778q-11.956777 11.852779-11.956776 39.64326z m172.170785 11.433787v-14.45373l50.013066-0.087999v45.701147a88.224353 88.224353 0 0 1-23.688558 14.401731 68.078729 68.078729 0 0 1-25.119531 4.81791 64.745791 64.745791 0 0 1-31.613409-7.768855 50.257062 50.257062 0 0 1-21.471599-22.46558 73.316631 73.316631 0 0 1-7.330864-32.835387 79.024524 79.024524 0 0 1 7.209866-33.551374 49.192081 49.192081 0 0 1 20.719613-23.164567 62.964824 62.964824 0 0 1 31.159418-7.557859 59.665886 59.665886 0 0 1 23.164568 4.328919 38.404283 38.404283 0 0 1 16.216697 12.061775 54.428984 54.428984 0 0 1 8.937833 20.144624l-14.086737 4.032924a46.364134 46.364134 0 0 0-6.598877-14.768724 27.231492 27.231492 0 0 0-11.276789-8.622839 40.045252 40.045252 0 0 0-16.269696-3.22994 46.102139 46.102139 0 0 0-18.519655 3.403937 34.755351 34.755351 0 0 0-12.604764 8.937833 43.344191 43.344191 0 0 0-7.453861 12.219772 66.909751 66.909751 0 0 0-4.502916 24.769537q0 16.479692 5.428899 27.546486a35.645334 35.645334 0 0 0 15.832704 16.479692 47.394115 47.394115 0 0 0 22.064588 5.3589 56.173951 56.173951 0 0 0 34.459357-12.760762v-22.937571z"
        fill={getIconColor(color, 4, '#333333')}
      />
    </svg>
  );
};

IconClothes.defaultProps = {
  size: 18,
};

export default IconClothes;