<!--food-->
<view qq:if="{{name === 'food'}}" style="background-image: url({{quot}}data:image/svg+xml, %3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='{{svgSize}}px' height='{{svgSize}}px'%3E%3Cpath d='M512 14.456C237.327 14.456 14.456 237.327 14.456 512S237.327 1009.544 512 1009.544 1009.544 786.673 1009.544 512 786.673 14.456 512 14.456z m-36.141 298.768c2.41 0 3.614-1.205 3.614-3.615 0-1.204-1.205-2.409-1.205-2.409-9.637-8.433-14.456-21.685-14.456-34.936 0-27.709 21.684-49.393 49.393-49.393 27.708 0 49.393 21.684 49.393 49.393 0 14.456-6.024 26.503-14.457 34.936 0 0-1.205 1.205-1.205 2.41 0 2.409 1.205 3.614 3.615 3.614 160.225 18.07 284.31 154.202 284.31 319.247H191.548c0-165.045 124.085-301.177 284.31-319.247z m383.096 377.072h-693.91c-8.433 0-15.661-7.228-15.661-15.66v-1.205c0-8.433 7.228-15.662 15.66-15.662h693.911c8.433 0 15.661 7.229 15.661 15.662v1.204c0 9.638-7.228 15.661-15.66 15.661z' fill='{{(isStr ? color : color[0]) || '#343535'}}' /%3E%3Cpath d='M415.624 355.388c-31.323 12.047-65.055 30.118-106.015 78.306-53.007 62.645-65.054 132.518-65.054 132.518-2.41 13.252 0 15.66 0 15.66h49.393s-6.023-3.613 16.866-68.667c32.527-92.763 104.81-136.132 104.81-136.132s21.684-12.047 16.865-22.89c-2.409-3.614-13.251 0-16.865 1.205z' fill='{{(isStr ? color : color[1]) || '#343535'}}' /%3E%3C/svg%3E{{quot}}); width: {{svgSize}}px; height: {{svgSize}}px; " class="icon" />

<!--temperature-->
<view qq:if="{{name === 'temperature'}}" style="background-image: url({{quot}}data:image/svg+xml, %3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='{{svgSize}}px' height='{{svgSize}}px'%3E%3Cpath d='M702.915 147.525c95.457 0 173.558 78.101 173.558 173.558s-78.101 173.56-173.558 173.56-173.559-78.1-173.559-173.558 78.102-173.56 173.559-173.56' fill='{{(isStr ? color : color[0]) || '#FFE079'}}' /%3E%3Cpath d='M286.373 164.882v86.78H112.814v-86.78c0-48.596 38.183-86.78 86.78-86.78s86.779 38.182 86.779 86.78' fill='{{(isStr ? color : color[1]) || '#ECF4F7'}}' /%3E%3Cpath d='M112.814 564.067V251.66h173.559v402.657c62.481 31.24 104.135 95.457 104.135 170.089 0 105.87-85.043 190.915-190.916 190.915S8.68 930.278 8.68 824.406c0-74.63 41.654-138.848 104.135-170.09v-90.25z' fill='{{(isStr ? color : color[2]) || '#FF7474'}}' /%3E%3Cpath d='M199.592 1024C90.25 1024 0 933.748 0 824.406 0 751.51 39.92 683.823 104.136 649.11V251.66c0-5.207 3.471-8.678 8.678-8.678H216.95c5.206 0 8.678 3.471 8.678 8.678 0 5.207-3.472 8.679-8.678 8.679h-95.46v86.78h26.035c5.206 0 8.678 3.472 8.678 8.679 0 5.207-3.472 8.678-8.678 8.678H121.49v86.78h26.034c5.206 0 8.678 3.473 8.678 8.68s-3.472 8.678-8.678 8.678H121.49v86.78h26.034c5.206 0 8.678 3.472 8.678 8.679s-3.472 8.678-8.678 8.678H121.49v81.574c0 3.472-1.735 6.942-5.207 6.942-60.746 31.24-98.929 93.722-98.929 161.41 0 100.663 81.574 182.237 182.237 182.237S381.83 923.34 381.83 822.677c0-69.423-38.183-130.17-98.93-161.41-3.471-1.735-5.206-5.207-5.206-6.942V164.882c0-43.39-34.712-78.102-78.102-78.102s-78.101 34.713-78.101 78.102v17.355c0 5.207-3.472 8.679-8.679 8.679-5.207 0-8.679-3.472-8.679-8.679v-17.355c0-52.068 43.39-95.457 95.457-95.457s95.457 43.39 95.457 95.457v484.23c64.216 34.713 104.136 102.4 104.136 175.296 0.004 109.34-90.248 199.592-199.59 199.592z m0-104.136c-5.206 0-8.678-3.471-8.678-8.678 0-5.207 3.472-8.679 8.678-8.679 43.39 0 78.102-34.712 78.102-78.101 0-5.207 3.472-8.68 8.679-8.68 5.206 0 8.678 3.473 8.678 8.68 0 52.067-43.39 95.458-95.459 95.458z m503.323-277.696c-5.207 0-8.679-3.471-8.679-8.678v-69.423c0-5.207 3.472-8.679 8.679-8.679s8.678 3.472 8.678 8.679v69.423c0 5.209-3.471 8.678-8.678 8.678z m105.87-55.537c-3.472 0-6.941-1.735-8.678-5.207l-13.886-31.24v-3.472c0-3.472 1.735-6.942 5.207-8.68 5.207-1.734 8.679 0 12.148 5.208l13.886 31.24v3.472c0 3.472-1.735 6.942-5.207 8.679h-3.47z m-211.74 0h-3.473c-3.471-1.735-5.206-5.207-5.206-8.679v-3.472l13.885-31.24c1.735-5.207 6.942-6.942 12.149-5.207 3.471 1.735 5.206 5.207 5.206 8.679v3.471l-13.885 31.241c-1.735 3.47-5.207 5.207-8.677 5.207z m-114.55-36.448c-1.735 0-5.207 0-6.941-1.735-1.735-1.734-1.735-3.471-1.735-6.941s0-5.207 1.735-6.942l48.595-48.596c3.472-3.472 8.68-3.472 12.149 0 1.735 1.735 1.735 3.472 1.735 6.942s0 5.207-1.735 6.942l-48.596 48.595c-1.737 1.735-3.472 1.735-5.207 1.735z m440.84 0c-1.736 0-5.207 0-6.942-1.735l-48.596-48.595c-1.735-1.735-1.735-3.472-1.735-6.942s0-5.207 1.735-6.942c3.472-3.472 8.678-3.472 12.148 0l48.596 48.596c1.735 1.735 1.735 3.472 1.735 6.942s0 5.207-1.735 6.941c-1.735 1.735-1.735 1.735-5.207 1.735z m-220.42-46.86c-100.664 0-182.237-81.574-182.237-182.238s81.573-182.237 182.237-182.237 182.237 81.574 182.237 182.237-81.574 182.237-182.237 182.237z m0-347.12c-90.25 0-164.882 74.63-164.882 164.882s74.63 164.882 164.882 164.882 164.882-74.63 164.882-164.882-74.632-164.882-164.882-164.882zM446.048 435.634c-3.472 0-6.942-1.735-8.679-5.206v-3.472c0-3.472 1.735-6.942 5.207-8.679l31.24-13.885c5.207-1.735 8.68 0 12.15 5.206v3.472c0 3.472-1.736 6.942-5.208 8.679l-31.24 13.885h-3.47z m513.734 0h-3.472l-31.24-13.885c-3.473-1.735-5.208-5.207-5.208-8.679v-3.472c1.735-5.206 6.942-6.941 12.149-5.206l31.24 13.885c3.472 1.735 5.207 5.207 5.207 8.679v3.472c-1.733 3.47-5.204 5.206-8.676 5.206zM390.508 329.762c-5.207 0-8.678-3.472-8.678-8.679 0-5.207 3.471-8.678 8.678-8.678h69.423c5.207 0 8.679 3.471 8.679 8.678 0 5.207-3.472 8.679-8.679 8.679h-69.423z m624.813 0h-69.423c-5.206 0-8.678-3.472-8.678-8.679 0-5.207 3.472-8.678 8.678-8.678h69.423c5.207 0 8.679 3.471 8.679 8.678 0 5.209-3.472 8.679-8.679 8.679z m-88.515-93.722c-3.472 0-6.942-1.735-8.678-5.207v-3.472c0-3.472 1.734-6.941 5.206-8.678l31.241-13.886c5.207-1.735 8.679 0 12.148 5.207v3.472c0 3.472-1.734 6.941-5.206 8.678l-31.241 13.886h-3.47z m-447.783 0h-3.471l-31.241-13.886c-3.472-1.734-5.207-5.206-5.207-8.678v-3.472c1.735-5.207 6.942-6.942 12.149-5.207l31.24 13.886c3.472 1.734 5.207 5.206 5.207 8.678v3.472c-3.47 3.472-5.205 5.207-8.677 5.207z m395.715-78.102c-1.735 0-5.206 0-6.941-1.735-1.735-1.735-1.735-3.472-1.735-6.941 0-3.472 0-5.207 1.735-6.942l48.596-48.598c3.471-3.472 8.678-3.472 12.148 0 1.735 1.735 1.735 3.472 1.735 6.942 0 3.472 0 5.206-1.735 6.941l-48.596 48.598c0 1.735-3.472 1.735-5.207 1.735z m-343.647 0c-1.735 0-5.207 0-6.942-1.735l-48.595-48.596c-1.735-1.735-1.735-3.471-1.735-6.941 0-3.472 0-5.207 1.735-6.942 3.471-3.472 8.678-3.472 12.148 0l48.596 48.596c1.735 1.735 1.735 3.472 1.735 6.942 0 3.471 0 5.206-1.735 6.941-1.735 1.735-3.472 1.735-5.207 1.735z m78.102-52.068c-3.472 0-6.942-1.734-8.679-5.206L586.63 69.423v-3.472c0-3.472 1.735-6.942 5.207-8.678 5.206-1.735 8.678 0 12.148 5.206l13.885 31.24v3.473c0 3.472-1.734 6.941-5.206 8.678h-3.47z m187.444 0h-3.472c-3.472-1.734-5.207-5.206-5.207-8.678V93.72l13.886-31.24c1.734-5.207 6.941-6.942 12.148-5.207 3.472 1.734 5.207 5.206 5.207 8.678v3.472l-13.886 31.24c-3.47 1.738-5.204 5.207-8.676 5.207z m-93.722-19.09c-5.207 0-8.679-3.472-8.679-8.678V8.679c0-5.207 3.472-8.679 8.679-8.679s8.678 3.472 8.678 8.679v69.423c0 5.206-3.471 8.678-8.678 8.678z' fill='{{(isStr ? color : color[3]) || '#51565F'}}' /%3E%3C/svg%3E{{quot}}); width: {{svgSize}}px; height: {{svgSize}}px; " class="icon" />

<!--clothes-->
<view qq:if="{{name === 'clothes'}}" style="background-image: url({{quot}}data:image/svg+xml, %3Csvg viewBox='0 0 1282 1024' xmlns='http://www.w3.org/2000/svg' width='{{svgSize}}px' height='{{svgSize}}px'%3E%3Cpath d='M1271.884632 311.442305c-53.694997-81.364481-187.882492-221.869857-427.156025-299.324411-26.689502-8.727837-55.68496-2.861947-75.655587 17.456674C723.686867 75.956702 653.861171 137.927545 560.574913 37.011429 531.30046 5.36302 471.547575-1.811846 434.244272 18.699771 226.130158 119.055897 56.20933 259.527274 56.471326 334.326877c-0.260995 134.710485 141.850351 175.436724 162.727961 169.727831s75.376593-78.553533 75.376593-78.553533c14.069737-14.662726 38.124288-4.27692 38.124288 16.479692v404.270452c0 93.688251 73.508627 170.337819 163.33895 170.337819h259.645152c131.428546 0 248.089368 22.48458 248.089368-258.719169V439.081922c0-20.738613 24.054551-31.142419 38.124288-16.461693 0 0 46.661129 75.934582 78.064542 81.433479 29.675446 5.236902 152.777147-45.00216 162.343969-150.525189a65.740772 65.740772 0 0 0-10.421805-42.087214z' fill='{{(isStr ? color : color[0]) || '#FFF6B3'}}' /%3E%3Cpath d='M759.246203 1023.991c-8.536841 0-17.15968-0.104998-25.871516-0.209996s-18.049663-0.208996-27.161493-0.208996H446.551042c-93.915246 0-170.30382-79.548515-170.30382-177.320689V441.910869a15.972702 15.972702 0 0 0-9.949814-15.257715 14.296733 14.296733 0 0 0-15.885704 3.334937c-9.967814 13.319751-56.977936 74.817603-78.850527 80.787492-15.273715 4.189922-64.203801-9.251827-103.167074-39.049271C37.112687 447.810759-0.138617 404.552566 0.00038 334.308878c-0.121998-38.071289 40.14925-92.622271 113.273885-153.614132C184.846929 121.167858 280.035151 61.432973 381.560256 12.502887c41.197231-22.51958 104.058057-13.301752 134.657485 19.77763 31.562411 34.144362 62.948825 51.671035 93.288258 52.107027 40.515244 0.610989 74.43261-28.349471 105.104038-59.682885 21.139605-21.593597 52.857013-28.977459 82.794454-19.28964 273.1219 88.398349 398.807554 253.588265 430.821956 302.116359a72.932638 72.932638 0 0 1 11.503785 46.556131c-5.079905 56.331948-40.324247 94.351238-68.987712 116.311828-38.159287 29.274453-82.393462 43.780183-101.456106 40.463244-32.729389-5.725893-75.724586-73.211633-82.393461-83.964432a14.313733 14.313733 0 0 0-15.709707-3.141941 15.989701 15.989701 0 0 0-9.950814 15.256715v318.857046c0 114.07687-18.608653 185.612534-58.583906 225.185796-37.076308 36.589317-88.136354 40.935236-143.403323 40.935235zM260.727512 411.571435a29.082457 29.082457 0 0 1 10.787798 2.111961 30.129437 30.129437 0 0 1 18.695651 28.227473v404.34045c0 90.074318 70.13869 163.35595 156.339081 163.35595h259.662152c9.199828 0 18.416656 0.103998 27.31949 0.209996 64.744791 0.784985 120.639747 1.447973 159.323025-36.763314 36.659316-36.205324 54.445983-106.58801 54.445983-215.183982V439.081922a30.094438 30.094438 0 0 1 18.696651-28.209474 28.279472 28.279472 0 0 1 31.420413 6.98187l0.523991 0.54099 0.383992 0.628988c12.533766 20.389619 50.117064 74.154615 73.316631 78.20454 12.079774 2.111961 52.649017-8.728837 90.563309-37.759295 26.446506-20.283621 58.9329-55.212969 63.558814-106.483012a58.8979 58.8979 0 0 0-9.251828-37.618298c-31.421413-47.568112-154.663112-209.476089-423.455093-296.512463-24.875536-8.04685-51.112046-2.006963-68.516721 15.710707-32.852387 33.569373-69.528702 64.588794-115.210848 63.889807-34.319359-0.487991-69.09271-19.533635-103.35907-56.575944-26.184511-28.349471-82.376462-36.43132-117.8298-16.949684l-0.331994 0.174997c-100.618121 48.441096-194.93436 107.547992-265.615041 166.340894C53.294385 248.808474 13.843122 300.863502 13.966119 334.239879c-0.122998 64.588794 34.144362 104.336052 62.842827 126.348641 38.909273 29.675446 82.864453 38.910273 90.999301 36.659315 13.528747-3.701931 51.112046-48.617092 71.570663-76.058579l0.55899-0.644988a28.523467 28.523467 0 0 1 20.789612-8.972833z' fill='{{(isStr ? color : color[1]) || '#323333'}}' /%3E%3Cpath d='M620.013803 279.304905c-115.997834 0-210.366072-90.772305-210.366072-202.493219a194.795363 194.795363 0 0 1 13.772743-72.146653 6.98287 6.98287 0 1 1 12.969758 5.149904 181.074619 181.074619 0 0 0-12.777762 67.048748c0 103.935059 88.102355 188.52848 196.401333 188.52848S816.415136 180.833743 816.415136 76.863685a181.54561 181.54561 0 0 0-7.837854-52.875013 6.98287 6.98287 0 0 1 13.353751-4.066924 195.510349 195.510349 0 0 1 8.448842 56.941937c0 111.615916-94.368238 202.44122-210.366072 202.44122z' fill='{{(isStr ? color : color[2]) || '#323333'}}' /%3E%3Cpath d='M489.685237 607.640774V484.521073h40.655241a94.26424 94.26424 0 0 1 21.035607 1.745967 39.224268 39.224268 0 0 1 17.299677 8.919834 50.152064 50.152064 0 0 1 13.963739 21.034607 85.728399 85.728399 0 0 1 4.625914 29.274454 89.393331 89.393331 0 0 1-3.141942 24.857535 61.708848 61.708848 0 0 1-7.942851 17.840667 43.641185 43.641185 0 0 1-10.7528 11.171792 42.663203 42.663203 0 0 1-14.086737 6.179884 77.610551 77.610551 0 0 1-18.975645 2.094961z m15.623708-14.523729h25.206529a59.054897 59.054897 0 0 0 18.311658-2.269957 26.184511 26.184511 0 0 0 10.595803-6.388881 39.416264 39.416264 0 0 0 8.727837-15.569709 79.513515 79.513515 0 0 0 3.089942-23.723557q0-19.324639-6.074887-29.676446t-14.767724-13.964739q-6.283883-2.513953-20.214623-2.513953h-24.874535z m98.802155-45.439151q0-30.670427 15.710707-48.004104t40.743239-17.334676a54.847976 54.847976 0 0 1 29.48345 8.134848 52.369022 52.369022 0 0 1 20.004626 22.693576 76.371574 76.371574 0 0 1 6.895871 33.044383 75.148597 75.148597 0 0 1-7.261864 33.516374 50.623055 50.623055 0 0 1-20.529617 22.379583 56.802939 56.802939 0 0 1-28.662465 7.592858 54.11499 54.11499 0 0 1-29.797443-8.396843 53.224006 53.224006 0 0 1-19.900629-22.919573 72.059655 72.059655 0 0 1-6.685875-30.706426z m16.0947 0.244995q0 22.256584 11.486785 35.069345a38.892274 38.892274 0 0 0 57.814921-0.121997q11.381787-12.934758 11.399787-36.658316a65.408779 65.408779 0 0 0-4.870909-26.184511 38.631279 38.631279 0 0 0-14.261734-17.456674 37.409301 37.409301 0 0 0-21.052607-6.179885 39.10227 39.10227 0 0 0-28.680464 11.853779q-11.887778 11.887778-11.905778 39.678259z m172.119786 11.433787v-14.45373l50.012066-0.087999v45.701147a88.224353 88.224353 0 0 1-23.758556 14.401731 68.078729 68.078729 0 0 1-25.136531 4.81791 64.675792 64.675792 0 0 1-31.59641-7.768855 50.257062 50.257062 0 0 1-21.470599-22.46558 73.141634 73.141634 0 0 1-7.244865-32.835387 78.762529 78.762529 0 0 1 7.139867-33.551374 49.192081 49.192081 0 0 1 20.807611-23.164567 62.842827 62.842827 0 0 1 31.159418-7.557859 59.525889 59.525889 0 0 1 23.094569 4.345919 38.404283 38.404283 0 0 1 16.234697 12.062774 54.708978 54.708978 0 0 1 8.937833 20.144624l-14.087737 4.031925a46.364134 46.364134 0 0 0-6.615876-14.767724 27.162493 27.162493 0 0 0-11.25979-8.623839 40.045252 40.045252 0 0 0-16.268696-3.22994 46.102139 46.102139 0 0 0-18.520654 3.404937 34.616354 34.616354 0 0 0-12.603765 8.937833 42.942198 42.942198 0 0 0-7.453861 12.219771 66.909751 66.909751 0 0 0-4.520915 24.769538q0 16.479692 5.445898 27.546486a35.680334 35.680334 0 0 0 15.815705 16.478692 47.464114 47.464114 0 0 0 22.204585 5.323901 56.278949 56.278949 0 0 0 34.459357-12.759762v-22.920572z' fill='{{(isStr ? color : color[3]) || '#F7DA5E'}}' /%3E%3Cpath d='M456.691853 607.640774V484.521073h40.67424a94.037244 94.037244 0 0 1 20.947609 1.745967 39.381265 39.381265 0 0 1 17.316677 8.814836 50.117064 50.117064 0 0 1 13.964739 21.035607 85.728399 85.728399 0 0 1 4.625914 29.273454 90.092318 90.092318 0 0 1-3.054943 24.858535 61.253856 61.253856 0 0 1-8.06485 17.927666 43.39619 43.39619 0 0 1-10.752799 11.171791 42.663203 42.663203 0 0 1-14.087737 6.179885 77.453554 77.453554 0 0 1-18.957646 2.093961z m15.624708-14.523729h25.206529a59.176895 59.176895 0 0 0 18.329658-2.269957 26.184511 26.184511 0 0 0 10.577803-6.388881 39.207268 39.207268 0 0 0 8.727837-15.569709 78.902527 78.902527 0 0 0 3.107942-23.723557q0-19.324639-6.092887-29.676446t-14.767724-13.964739q-6.283883-2.513953-20.214622-2.513953h-24.874536z m98.732156-45.439151q0-30.670427 15.710707-48.004104t40.760239-17.334676a54.742978 54.742978 0 0 1 29.46645 8.134848 52.369022 52.369022 0 0 1 20.005626 22.693576 76.371574 76.371574 0 0 1 6.98187 33.044383 75.376593 75.376593 0 0 1-7.243865 33.516374 50.728053 50.728053 0 0 1-20.546616 22.379583 56.802939 56.802939 0 0 1-28.663465 7.592858 54.11499 54.11499 0 0 1-29.797444-8.396843 53.189007 53.189007 0 0 1-19.882628-22.919573 71.815659 71.815659 0 0 1-6.789874-30.706426z m16.1127 0.244995q0 22.256584 11.468785 35.069345a38.909273 38.909273 0 0 0 57.832921-0.121997q11.398787-12.934758 11.380787-36.658316a65.408779 65.408779 0 0 0-4.869909-26.184511 38.596279 38.596279 0 0 0-14.244734-17.456674 37.4963 37.4963 0 0 0-21.069607-6.179885 39.067271 39.067271 0 0 0-28.541467 11.888778q-11.956777 11.852779-11.956776 39.64326z m172.170785 11.433787v-14.45373l50.013066-0.087999v45.701147a88.224353 88.224353 0 0 1-23.688558 14.401731 68.078729 68.078729 0 0 1-25.119531 4.81791 64.745791 64.745791 0 0 1-31.613409-7.768855 50.257062 50.257062 0 0 1-21.471599-22.46558 73.316631 73.316631 0 0 1-7.330864-32.835387 79.024524 79.024524 0 0 1 7.209866-33.551374 49.192081 49.192081 0 0 1 20.719613-23.164567 62.964824 62.964824 0 0 1 31.159418-7.557859 59.665886 59.665886 0 0 1 23.164568 4.328919 38.404283 38.404283 0 0 1 16.216697 12.061775 54.428984 54.428984 0 0 1 8.937833 20.144624l-14.086737 4.032924a46.364134 46.364134 0 0 0-6.598877-14.768724 27.231492 27.231492 0 0 0-11.276789-8.622839 40.045252 40.045252 0 0 0-16.269696-3.22994 46.102139 46.102139 0 0 0-18.519655 3.403937 34.755351 34.755351 0 0 0-12.604764 8.937833 43.344191 43.344191 0 0 0-7.453861 12.219772 66.909751 66.909751 0 0 0-4.502916 24.769537q0 16.479692 5.428899 27.546486a35.645334 35.645334 0 0 0 15.832704 16.479692 47.394115 47.394115 0 0 0 22.064588 5.3589 56.173951 56.173951 0 0 0 34.459357-12.760762v-22.937571z' fill='{{(isStr ? color : color[4]) || '#333333'}}' /%3E%3C/svg%3E{{quot}}); width: {{svgSize}}px; height: {{svgSize}}px; " class="icon" />

<!--city-->
<view qq:if="{{name === 'city'}}" style="background-image: url({{quot}}data:image/svg+xml, %3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='{{svgSize}}px' height='{{svgSize}}px'%3E%3Cpath d='M581.536 328.416a16 16 0 0 0 0 32h230.336v98.256a16 16 0 0 0 32 0V272.816a16 16 0 0 0-16-16h-43.264a89.568 89.568 0 0 0-63.904-46.864V176a16 16 0 0 0-32 0v33.968a89.568 89.568 0 0 0-63.872 46.848H581.52a16 16 0 0 0 0 32h53.68a15.776 15.776 0 0 0 15.184-11.968c0.128-0.288 0.384-0.464 0.496-0.752 8.688-21.344 29.856-35.68 53.824-35.68 24.448 0 45.968 14.944 54.304 36.928a15.52 15.52 0 0 0 3.84 5.696 15.728 15.728 0 0 0 12.064 5.792h36.976v39.584H581.536z' fill='{{(isStr ? color : color[0]) || '#0F13AE'}}' /%3E%3Cpath d='M312 312.88h271.04V944H312zM712 512h232v432H712z' fill='{{(isStr ? color : color[1]) || '#95EAFF'}}' /%3E%3Cpath d='M285.584 307.344a16 16 0 0 0-32 0v632.352a16 16 0 0 0 32 0V307.344zM784 601.232a16 16 0 0 0-32 0v54.464a16 16 0 0 0 32 0v-54.464z m0 160a16 16 0 0 0-32 0v54.464a16 16 0 0 0 32 0v-54.464z' fill='{{(isStr ? color : color[2]) || '#49A3FE'}}' /%3E%3Cpath d='M575.392 288h-304.8a16 16 0 0 0 0 32h288.8v94.64H346.496a16 16 0 0 0 0 32h212.896v96H282.496a16 16 0 0 0 0 32h276.896v96H282.496a16 16 0 0 0 0 32h276.896v250.896a16 16 0 0 0 32 0V304a16 16 0 0 0-16-16z' fill='{{(isStr ? color : color[3]) || '#49A3FE'}}' /%3E%3Cpath d='M508.32 798.64H282.496a16 16 0 0 0 0 32H508.32a16 16 0 0 0 0-32z' fill='{{(isStr ? color : color[4]) || '#49A3FE'}}' /%3E%3Cpath d='M832 585.232a16 16 0 0 0-16 16v54.464a16 16 0 0 0 32 0v-54.464a16 16 0 0 0-16-16z m0 160a16 16 0 0 0-16 16v54.464a16 16 0 0 0 32 0v-54.464a16 16 0 0 0-16-16z' fill='{{(isStr ? color : color[5]) || '#0F13AE'}}' /%3E%3Cpath d='M973.888 941.84h-34.976a15.84 15.84 0 0 0 1.168-5.776V519.856a16 16 0 0 0-16-16h-240a16 16 0 0 0-16 16v422h-462.4V385.968a16 16 0 0 0-32 0V941.84h-46.976v-593.2l211.408-157.696V288h32V65.392a16 16 0 0 0-32 0v85.632L101.136 327.792a16 16 0 0 0-6.432 12.832v601.232H50.112a16 16 0 0 0 0 32h923.776a16 16 0 0 0 0-32.016z m-273.808 0.016v-406h208V936.08a15.84 15.84 0 0 0 1.168 5.776H700.08z' fill='{{(isStr ? color : color[6]) || '#0F13AE'}}' /%3E%3C/svg%3E{{quot}}); width: {{svgSize}}px; height: {{svgSize}}px; " class="icon" />

<!--weather-suggest-->
<view qq:if="{{name === 'weather-suggest'}}" style="background-image: url({{quot}}data:image/svg+xml, %3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='{{svgSize}}px' height='{{svgSize}}px'%3E%3Cpath d='M814.8 602.8L783 571c-3.7-3.7-3.7-9.9 0-13.6 3.7-3.7 9.9-3.7 13.6 0l31.8 31.8c3.7 3.7 3.7 9.9 0 13.6-3.7 3.8-9.9 3.8-13.6 0z' fill='{{(isStr ? color : color[0]) || '#F4BA64'}}' /%3E%3Cpath d='M536.1 457.4a138.2 138.2 0 1 0 276.4 0 138.2 138.2 0 1 0-276.4 0z' fill='{{(isStr ? color : color[1]) || '#F7931E'}}' /%3E%3Cpath d='M656.6 579.5c-78.8 0-143-64.1-143-143s64.1-143 143-143c41.2 0 61 12.6 72.9 20.2l1.2 0.8c4.5 2.8 5.8 8.8 3 13.3-2.9 4.5-8.8 5.8-13.3 3l-1.2-0.8c-11.4-7.2-27-17.2-62.5-17.2-68.2 0-123.7 55.5-123.7 123.7s55.5 123.7 123.7 123.7 123.7-55.5 123.7-123.7c0-39.8-17.4-65.8-30.5-81.8-3.4-4.1-2.8-10.2 1.4-13.6 4.1-3.4 10.2-2.8 13.6 1.4 8.6 10.6 34.9 42.7 34.9 94-0.2 78.8-64.4 143-143.2 143z' fill='{{(isStr ? color : color[2]) || '#333333'}}' /%3E%3Cpath d='M886.4 446.1h-45c-5.3 0-9.6-4.3-9.6-9.6s4.3-9.6 9.6-9.6h45c5.3 0 9.6 4.3 9.6 9.6s-4.3 9.6-9.6 9.6z' fill='{{(isStr ? color : color[3]) || '#FFDB69'}}' /%3E%3Cpath d='M832 279.6l-31.8 31.8c-3.7 3.7-9.9 3.7-13.6 0-3.7-3.7-3.7-9.9 0-13.6l31.8-31.8c3.7-3.7 9.9-3.7 13.6 0 3.8 3.7 3.8 9.9 0 13.6z' fill='{{(isStr ? color : color[4]) || '#F4BA64'}}' /%3E%3Cpath d='M675.9 200.3v45c0 5.3-4.3 9.6-9.6 9.6s-9.6-4.3-9.6-9.6v-45c0-5.3 4.3-9.6 9.6-9.6 5.2 0 9.6 4.3 9.6 9.6z' fill='{{(isStr ? color : color[5]) || '#FFDB69'}}' /%3E%3Cpath d='M509.4 254.6l31.8 31.8c3.7 3.7 3.7 9.9 0 13.6-3.7 3.7-9.9 3.7-13.6 0l-31.8-31.8c-3.7-3.7-3.7-9.9 0-13.6 3.7-3.7 9.8-3.7 13.6 0z' fill='{{(isStr ? color : color[6]) || '#F4BA64'}}' /%3E%3Cpath d='M688.2 552.8c-1.4 0-2.7 0.1-4.1 0.1-0.7 0-1.3-0.1-2-0.1h-65.5c-10.4-77.5-76.8-137.2-157.1-137.2-78.3 0-143.4 56.8-156.2 131.5-74.6 5.1-133.5 67.1-133.5 143 0 79.2 64.2 143.3 143.3 143.3 3 0 6.1-0.1 9.1-0.3 2 0.2 4.1 0.3 6.2 0.3h353.8c0.7 0 1.3-0.1 2-0.1 1.4 0 2.7 0.1 4.1 0.1 77.5 0 140.3-62.8 140.3-140.3-0.1-77.5-62.9-140.3-140.4-140.3z' fill='{{(isStr ? color : color[7]) || '#FFECB6'}}' /%3E%3Cpath d='M656.1 823.7c-1.1 0-2.2 0-3.2-0.1h-1.1c-0.5 0.1-1.1 0.1-1.8 0.1H422c-5.3 0-9.6-4.3-9.6-9.6s4.3-9.6 9.6-9.6l231.5-0.1c0.9 0 1.7 0.1 2.6 0.1 72 0 130.7-58.6 130.7-130.7 0-72-58.6-130.6-130.7-130.6-0.9 0-1.7 0-2.6 0.1h-1.2l-1.8-0.1h-74.4l-1.1-8.4c-9.9-73.5-73.3-128.9-147.6-128.9-72.7 0-134.4 51.9-146.7 123.5l-1.3 7.5-7.6 0.5c-69.8 4.7-124.5 63.3-124.5 133.3 0 73.6 59.8 133.6 133.5 133.7 0.7-0.1 1.4-0.2 2.3-0.3 5.5-0.4 9.9 3.7 10.2 9 0.3 5.3-3.6 9.8-8.9 10.2-1 0.2-2.1 0.3-3.4 0.3-84.4 0-153-68.6-153-153 0-77.6 58.7-143 135-151.9 16.7-77.1 84.7-132.2 164.3-132.2 81 0 150.6 58.4 165.3 137.2H650c0.6 0 1.2 0 1.8 0.1h1.1c1.1 0 2.2-0.1 3.2-0.1 82.7 0 149.9 67.3 149.9 149.9s-67.2 150.1-149.9 150.1z' fill='{{(isStr ? color : color[8]) || '#333333'}}' /%3E%3Cpath d='M344.9 823.7h-16.5c-5.3 0-9.6-4.3-9.6-9.6s4.3-9.6 9.6-9.6h16.5c5.3 0 9.6 4.3 9.6 9.6s-4.3 9.6-9.6 9.6z' fill='{{(isStr ? color : color[9]) || '#333333'}}' /%3E%3C/svg%3E{{quot}}); width: {{svgSize}}px; height: {{svgSize}}px; " class="icon" />

<!--calendar-->
<view qq:if="{{name === 'calendar'}}" style="background-image: url({{quot}}data:image/svg+xml, %3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='{{svgSize}}px' height='{{svgSize}}px'%3E%3Cpath d='M711.306 290.697c24.282 0 45.377-19.707 45.377-44.032V46.56c0-24.325-21.096-44.053-45.377-44.053-24.302 0-43.988 19.728-43.988 44.053v200.105c0 24.325 19.686 44.032 43.988 44.032zM623.481 113.42H400.765v66.514H623.48V113.42z m260.572 0h-82.774v66.146h85.94c25.279 0 46.612 21.376 46.612 46.677V380.17H90.439V226.243c0-25.3 21.333-46.677 46.611-46.677h86.504V113.42H140.91c-64.086 0-116.508 52.509-116.508 116.703v676.802c0 64.174 50.491 116.68 114.577 116.68h745.073c64.062 0 116.507-52.506 116.507-116.68V230.124c0-64.195-52.446-116.704-116.507-116.704z m49.777 796.931c0 25.3-21.333 46.676-46.612 46.676H137.05c-25.278 0-46.611-21.376-46.611-46.676V446.446h843.39V910.35z m-666.722-264.17c36.878 0 66.753-29.939 66.753-66.88 0-36.923-29.875-66.862-66.753-66.862-36.854 0-66.752 29.94-66.752 66.861 0 36.942 29.897 66.882 66.752 66.882z m244.44 0c36.856 0 66.753-29.939 66.753-66.88 0-36.923-29.896-66.862-66.753-66.862-36.877 0-66.752 29.94-66.752 66.861 0 36.942 29.875 66.882 66.752 66.882zM265.916 890.71c36.878 0 66.752-29.94 66.752-66.861 0-36.943-29.874-66.883-66.752-66.883-36.855 0-66.752 29.94-66.752 66.883 0 36.921 29.896 66.861 66.752 66.861z m245.632 0c36.856 0 66.753-29.94 66.753-66.861 0-36.943-29.896-66.883-66.753-66.883-36.877 0-66.752 29.94-66.752 66.883 0 36.921 29.875 66.861 66.752 66.861z m244.093-244.527c36.857 0 66.754-29.94 66.754-66.882 0-36.922-29.897-66.86-66.754-66.86-36.877 0-66.752 29.939-66.752 66.86 0 36.942 29.875 66.882 66.752 66.882zM311.704 290.697c24.28 0 45.376-19.707 45.376-44.032V46.56c0-24.325-21.094-44.053-45.376-44.053-24.302 0-43.99 19.728-43.99 44.053v200.105c0 24.325 19.688 44.032 43.99 44.032z' fill='{{(isStr ? color : color[0]) || '#272636'}}' /%3E%3C/svg%3E{{quot}}); width: {{svgSize}}px; height: {{svgSize}}px; " class="icon" />

<!--weather-->
<view qq:if="{{name === 'weather'}}" style="background-image: url({{quot}}data:image/svg+xml, %3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='{{svgSize}}px' height='{{svgSize}}px'%3E%3Cpath d='M0 512a512 512 0 1 0 1024 0A512 512 0 1 0 0 512z' fill='{{(isStr ? color : color[0]) || '#FFFFFF'}}' /%3E%3Cpath d='M205.6 456.8a299.2 299.2 0 1 0 598.4 0 299.2 299.2 0 1 0-598.4 0z' fill='{{(isStr ? color : color[1]) || '#FFB900'}}' /%3E%3Cpath d='M504.8 768.8c-80 0-160-30.4-220.8-91.2-121.6-121.6-121.6-319.2 0-440.8 121.6-121.6 319.2-121.6 440.8 0 121.6 121.6 121.6 319.2 0 440.8-60 60.8-140 91.2-220 91.2z m0-597.6c-73.6 0-146.4 28-202.4 84-111.2 111.2-111.2 292.8 0 404.8 111.2 111.2 292.8 111.2 404.8 0 111.2-111.2 111.2-292.8 0-404.8-56-56.8-128.8-84-202.4-84z' fill='{{(isStr ? color : color[2]) || '#333333'}}' /%3E%3Cpath d='M543.2 575.2l-5.6 19.2-16-12c-23.2-16.8-50.4-25.6-79.2-25.6-74.4 0-135.2 60.8-135.2 135.2S368 827.2 442.4 827.2c48.8 0 92.8-25.6 116.8-67.2l10.4-17.6 12.8 15.2c36.8 44 91.2 69.6 149.6 69.6 108.8 0 196.8-88 196.8-196.8s-88.8-196-196.8-196c-88 0-164.8 57.6-188.8 140.8z' fill='{{(isStr ? color : color[3]) || '#FFFFFF'}}' /%3E%3Cpath d='M732 841.6c-61.6 0-120.8-27.2-160.8-74.4-26.4 45.6-76 74.4-128.8 74.4-82.4 0-149.6-67.2-149.6-149.6S360 542.4 442.4 542.4c32 0 61.6 9.6 87.2 28C556 481.6 639.2 419.2 732 419.2c116 0 211.2 94.4 211.2 211.2-0.8 116.8-95.2 211.2-211.2 211.2zM566.4 718.4l25.6 30.4c35.2 40.8 85.6 64.8 139.2 64.8 100.8 0 182.4-81.6 182.4-182.4C914.4 530.4 832 448 732 448c-80.8 0-152.8 53.6-175.2 131.2l-11.2 38.4-32-23.2c-20.8-15.2-45.6-23.2-71.2-23.2-67.2 0-120.8 54.4-120.8 120.8 0 67.2 54.4 120.8 120.8 120.8 43.2 0 83.2-23.2 104.8-60l19.2-34.4z' fill='{{(isStr ? color : color[4]) || '#333333'}}' /%3E%3Cpath d='M372.8 683.2l-12.8 3.2-4-12.8c-15.2-48-60.8-81.6-112-81.6-64.8 0-117.6 52.8-117.6 117.6S179.2 827.2 244 827.2c27.2 0 53.6-9.6 74.4-26.4l10.4-8.8 8.8 10.4c13.6 16 33.6 24.8 55.2 24.8 40.8 0 73.6-32.8 73.6-73.6S433.6 680 392.8 680c-6.4 0-13.6 0.8-20 3.2z' fill='{{(isStr ? color : color[5]) || '#FFFFFF'}}' /%3E%3Cpath d='M392.8 841.6c-24.8 0-49.6-11.2-65.6-29.6-23.2 19.2-52.8 29.6-83.2 29.6-72.8 0-132-59.2-132-132s59.2-132 132-132c57.6 0 108 36.8 125.6 91.2 8-2.4 16-3.2 24-3.2 48.8 0 88 39.2 88 88s-40 88-88.8 88z m-62.4-68.8l17.6 20c11.2 12.8 28 20 44.8 20 32.8 0 60-26.4 60-60s-26.4-60-60-60c-5.6 0-11.2 0.8-16 2.4l-26.4 8.8-8-25.6c-13.6-43.2-53.6-72-98.4-72-56.8 0-104 46.4-104 104s46.4 104 104 104c24 0 47.2-8 65.6-23.2l20.8-18.4z' fill='{{(isStr ? color : color[6]) || '#333333'}}' /%3E%3C/svg%3E{{quot}}); width: {{svgSize}}px; height: {{svgSize}}px; " class="icon" />

<!--message-->
<view qq:if="{{name === 'message'}}" style="background-image: url({{quot}}data:image/svg+xml, %3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='{{svgSize}}px' height='{{svgSize}}px'%3E%3Cpath d='M615.9 892.8c-6.5 0-13-1.4-19-4.2-15.8-7.4-25.8-23.2-25.8-40.6v-89.6H154.3c-37.4 0-67.9-30.1-67.9-67.2V198.4c0-37.1 30.4-67.2 67.9-67.2h715.4c37.4 0 67.9 30.1 67.9 67.2v492.8c0 37.1-30.4 67.2-67.9 67.2h-76.1l-149.1 124c-8.2 6.9-18.4 10.4-28.6 10.4zM176 668.8h439.9c24.7 0 44.8 20.1 44.8 44.8v38.9l88.1-73.3c8-6.7 18.2-10.4 28.7-10.4H848v-448H176v448z' fill='{{(isStr ? color : color[0]) || '#1A1A1A'}}' /%3E%3Cpath d='M288 355.2h268.8v89.6H288z m358.4 0H736v89.6h-89.6z' fill='{{(isStr ? color : color[1]) || '#1A1A1A'}}' /%3E%3C/svg%3E{{quot}}); width: {{svgSize}}px; height: {{svgSize}}px; " class="icon" />

<!--flower-->
<view qq:if="{{name === 'flower'}}" style="background-image: url({{quot}}data:image/svg+xml, %3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='{{svgSize}}px' height='{{svgSize}}px'%3E%3Cpath d='M657.381 614.562l11.453 3.18c35.382 11.21 139.452 67.368 48.882 202.186-155.405 46.834-178.5-74.672-178.769-106.28l-0.512-12.747h-52.951l-0.512 12.746c-0.27 31.61-23.364 153.142-178.77 106.28-90.57-134.817 13.475-190.975 48.883-202.186l11.453-3.18-16.815-50.795-12.261 3.422c-30.127 9.513-152.873 25.034-156.268-137.243 100.298-127.73 185.83-46.08 207.414-15.872l6.548 9.917 43.601-31.69-7.491-10.294c-18.567-25.573-72.165-137.081 80.68-191.704 152.926 54.65 102.589 161.658 80.761 191.704l-6.979 9.593 43.008 32.364 6.548-9.917c21.585-30.208 107.116-111.858 207.387 15.872-3.395 162.277-126.14 146.756-156.268 137.243l-12.26-3.422-16.762 50.823z' fill='{{(isStr ? color : color[0]) || '#FFBDD8'}}' /%3E%3Cpath d='M993.091 453.605l-21.019 64.755c-23.956 73.674-68.58 105.552-101.834 119.35-8.811 3.664-18.054 6.52-27.567 8.65 36.622 41.04 55.108 100.729 29.508 179.55l-20.992 64.781-68.851 20.184-40.448 59.15h-68.15c-82.863 0-133.901-36.03-161.657-83.564-27.729 47.535-78.794 83.59-161.711 83.59h-68.123l-40.421-59.15-68.797-20.156-21.046-64.754c-25.68-79.01-6.898-138.644 29.858-179.74a165.592 165.592 0 0 1-27.972-8.542c-33.226-13.77-77.904-45.621-101.834-119.269L30.99 453.66l43.79-56.751-2.102-71.626 55.107-40.044c44.41-32.283 86.744-43.305 124.955-40.825 0.35 18.701 3.1 37.214 7.869 55.296-28.268-4.932-62.302 0.862-101.187 29.13l-32.095 23.31 1.806 62.436-38.185 49.449 12.261 37.726c14.12 43.44 38.077 72.435 71.195 86.124 28.268 11.722 63.246 11.803 98.6 0.35L401.14 546.6l16.653 51.254-128.135 41.634c-30.046 9.755-125.143 50.904-86.474 169.795l12.261 37.7 59.985 17.57 35.247 51.577h39.64c125.009 0 134.737-103.128 134.737-134.737V646.656h53.894v134.737c0.027 31.61 9.81 134.71 134.71 134.71h39.748l35.247-51.578 59.985-17.57 12.234-37.726c37.888-116.682-52.979-158.45-84.777-169.175l-1.724-0.566-128.162-41.634 16.977-51.146 127.838 41.5 1.806 0.592c34.762 10.887 69.012 10.617 96.795-0.916 33.118-13.743 57.074-42.712 71.195-86.178l12.234-37.726-38.185-49.476 1.806-62.437-32.122-23.336c-101.133-73.459-169.58 4.258-188.173 29.858l-79.171 108.948-43.601-31.663 0.539-0.7 78.686-108.33c21.827-30.046 32.525-63.38 30.1-93.857-2.802-35.732-22.986-67.476-59.958-94.316l-32.067-23.31L512 136.409l-58.826-21.02-32.067 23.31C320 212.184 372.736 301.352 391.303 326.925L470.5 435.901l-43.6 31.69-79.2-108.975c-51.118-70.414-70.844-181.68 41.742-263.492l55.108-40.044L512 79.171l67.53-24.144 55.08 40.043c62.653 45.514 79.172 97.82 82.001 133.686 0.755 9.54 0.62 19.24-0.296 28.996 50.365-22.178 112.829-21.316 179.9 27.405l55.135 40.044-2.075 71.653 43.816 56.751zM512 504.643a34.304 34.304 0 1 0 0 68.608 34.304 34.304 0 0 0 0-68.608z m29.67-181.275a29.642 29.642 0 1 1-59.34-0.053 29.642 29.642 0 0 1 59.34 0.053z m121.047 372.575a29.67 29.67 0 1 1-47.967 34.762 29.67 29.67 0 0 1 47.967-34.762zM316.12 444.12a29.642 29.642 0 1 1-18.379 56.427 29.642 29.642 0 0 1 18.379-56.427z m391.76 0.027a29.67 29.67 0 1 1 18.298 56.454 29.67 29.67 0 0 1-18.298-56.454zM361.283 695.943a29.67 29.67 0 0 1 47.994 34.843 29.642 29.642 0 1 1-47.994-34.843z' fill='{{(isStr ? color : color[1]) || '#231F20'}}' /%3E%3C/svg%3E{{quot}}); width: {{svgSize}}px; height: {{svgSize}}px; " class="icon" />