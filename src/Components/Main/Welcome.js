import React from 'react';

const welcometxt = {
    fr: {
        title: 'Bk-Elite, votre société de transport privé haut-de-gamme en région PACA',
        btn: 'Entrer'
    },
    en: {
        title: 'BK-Elite, your high-end private transportation company in the PACA region.',
        btn: 'Enter'
    }
}

const Welcome = ({lang, isLoaded, setIsEntered}) => {

    function enterWebsite() {

        const html = document.getElementsByTagName('html')[0];
        const body = document.getElementsByTagName('body')[0];
        const container = document.querySelector('.welcome-container');
        const path1 = document.querySelector('#home-svg path:nth-child(2)');
        const path2 = document.querySelector('#home-svg path:nth-child(3)');
        const path3 = document.querySelector('#home-svg path:nth-child(4)');

        path1.style.animation = 'moveCar2 1.5s ease-in 1 forwards';
        path2.style.animation = 'moveCar2 1.5s ease-in 1 forwards';
        path3.style.animation = 'moveCar2 1.5s ease-in 1 forwards';

        setIsEntered(true);

        setTimeout(() => {
            container.style.animation = 'enter 1s ease-in-out 1 forwards';
        }, 1500);

        setTimeout(() => {
            html.style.overflow = 'overlay';
            body.style.overflow = 'auto';
            container.style.display = 'none';
            body.style.height = 'auto';
        }, 2500);
    }

    return (
        <div className="welcome-container">
            <div className="brand-logo">
                <svg width="90%" viewBox="0 0 486 222" fill="none" xmlns="http://www.w3.org/2000/svg" id="home-svg">
                    <title>{welcometxt[lang].title}</title>
                    <path d="M485.107 30.8667C476.786 43.1005 464.028 49.8353 448.812 50.746C437.22 51.4397 425.418 48.4967 413.666 47.9707C394.374 47.1072 375.028 46.2199 355.739 46.6389C342.845 46.9189 330.019 49.5016 317.144 50.9126C314.875 51.1613 312.578 50.9556 310.03 50.3678C313.852 46.841 355.851 39.1446 374.899 39.5421C397.261 40.0089 419.605 41.1711 442.227 41.3729C439.352 40.6889 436.484 39.9841 433.602 39.3241C398.994 31.3983 364.508 22.996 329.721 15.77C313.305 12.36 296.301 11.2702 279.581 9.02228C242.368 4.01912 207.352 12.6932 172.535 22.7973C168.342 24.0142 163.963 24.7102 159.67 25.6477C159.374 24.8314 159.078 24.0152 158.782 23.199C175.03 18.01 191.033 12.0383 207.585 7.81824C231.427 1.73978 256.069 -1.39694 280.783 0.599633C303.138 2.40557 325.542 5.34192 347.439 9.74115C381.481 16.5801 415.039 25.3489 448.955 32.7291C460.334 35.2051 472.09 34.6249 483.928 30.3826C484.649 30.3592 485.107 30.8667 485.107 30.8667Z" fill="white"/>
                    <path d="M204.684 49.393C181.48 48.9531 158.952 47.3026 136.532 48.242C109.948 49.3559 83.3733 51.9639 56.9557 55.2005C40.6637 57.1965 24.6869 61.6462 8.53129 64.8095C5.57007 65.1974 3.84227 64.6165 0 63.4992C6.66695 61.5181 13.3413 59.5609 19.9996 57.5519C49.7228 48.5832 79.8745 41.7187 111.087 40.7912C136.202 40.0449 161.332 39.6702 186.458 39.4136C209.454 39.1788 232.484 40.0315 255.443 39.0857C275.317 38.267 295.103 35.4987 314.948 33.8117C320.142 33.3701 325.408 33.7452 330.705 34.5585C289.506 44.251 247.674 48.6181 204.684 49.393Z" fill="white"/>
                    <path d="M49.4595 64.9664L48.4075 65.6894C45.0162 68.0201 41.2332 69.7254 37.2317 70.7271V70.7271L33.399 71.4227L29.6168 71.8865L28.8058 71.9499C23.7192 72.3473 18.6012 72.3139 13.5058 71.85V71.85L21.762 68.5389L23.2284 68.002C28.1001 66.2186 33.1645 64.9936 38.3267 64.35V64.35L38.5957 64.3364C42.2224 64.1523 45.8648 64.3636 49.4595 64.9664V64.9664Z" fill="white"/>
                    <line y1="98.2135" x2="480.727" y2="98.2135" stroke="#D1B000" strokeWidth="3"/>
                    <line x1="31.7565" y1="204.979" x2="152.212" y2="204.979" stroke="#D1B000" strokeWidth="3"/>
                    <line x1="326.325" y1="204.979" x2="446.78" y2="204.979" stroke="#D1B000" strokeWidth="3"/>
                    <path d="M136.691 156.704V153.579C136.691 152.733 136.382 152.001 135.763 151.382C135.145 150.764 134.412 150.454 133.566 150.454H111.691V156.704H136.691ZM105.441 162.954V144.204H133.566C134.412 144.204 135.145 143.911 135.763 143.325C136.382 142.707 136.691 141.958 136.691 141.079V137.954H105.441V131.704H142.941V144.204C142.941 145.083 142.632 145.832 142.013 146.45C141.395 147.036 140.662 147.329 139.816 147.329C140.662 147.329 141.395 147.639 142.013 148.257C142.632 148.876 142.941 149.608 142.941 150.454V162.954H105.441ZM224.191 162.954C222.433 162.954 220.952 162.352 219.747 161.148C218.543 159.911 217.941 158.43 217.941 156.704H255.441C255.441 158.462 254.822 159.943 253.585 161.148C252.348 162.352 250.884 162.954 249.191 162.954H224.191ZM224.191 150.454C222.433 150.454 220.952 149.852 219.747 148.648C218.543 147.411 217.941 145.93 217.941 144.204H255.441C255.441 145.962 254.822 147.443 253.585 148.648C252.348 149.852 250.884 150.454 249.191 150.454H224.191ZM224.191 137.954C222.433 137.954 220.952 137.352 219.747 136.148C218.543 134.911 217.941 133.43 217.941 131.704H255.441C255.441 133.462 254.822 134.943 253.585 136.148C252.348 137.352 250.884 137.954 249.191 137.954H224.191Z" fill="#D1B000"/>
                    <path d="M149.191 162.954V131.704H155.441V162.954H149.191ZM177.316 162.954L161.691 147.329L177.316 131.704H186.691L174.191 144.204H174.142L171.066 147.329L186.691 162.954H177.316ZM199.191 150.454C197.433 150.454 195.952 149.852 194.747 148.648C193.543 147.411 192.941 145.93 192.941 144.204H211.691C211.691 145.962 211.072 147.443 209.835 148.648C208.598 149.852 207.134 150.454 205.441 150.454H199.191ZM261.691 162.954V131.704H267.941V162.954H261.691ZM274.191 162.954V137.954H280.441V162.954H274.191ZM299.191 162.954C297.433 162.954 295.952 162.352 294.747 161.148C293.543 159.911 292.941 158.43 292.941 156.704V144.204H286.691C286.691 142.479 287.293 141.014 288.497 139.81C289.734 138.573 291.216 137.954 292.941 137.954V131.704H299.191V137.954H317.941C317.941 139.712 317.322 141.193 316.085 142.398C314.848 143.602 313.384 144.204 311.691 144.204H299.191V153.579C299.191 154.458 299.484 155.207 300.07 155.825C300.688 156.411 301.437 156.704 302.316 156.704H317.941C317.941 158.462 317.322 159.943 316.085 161.148C314.848 162.352 313.384 162.954 311.691 162.954H299.191ZM330.441 162.954C328.683 162.954 327.202 162.352 325.997 161.148C324.793 159.911 324.191 158.43 324.191 156.704V144.204C324.191 142.479 324.793 141.014 325.997 139.81C327.234 138.573 328.716 137.954 330.441 137.954H355.441L346.066 147.329H355.441L349.191 153.579H333.566L342.941 144.204H333.566C332.687 144.204 331.938 144.514 331.32 145.132C330.734 145.751 330.441 146.483 330.441 147.329V153.579C330.441 154.458 330.734 155.207 331.32 155.825C331.938 156.411 332.687 156.704 333.566 156.704H355.441C355.441 158.462 354.822 159.943 353.585 161.148C352.348 162.352 350.884 162.954 349.191 162.954H330.441ZM361.691 162.954V156.704H367.941V162.954H361.691Z" fill="white"/>
                    <path d="M175.351 193.409H185.611V195.317H177.799V202.301H184.963L184.639 204.209H177.799V213.821H185.611V215.729H175.351V193.409ZM188.788 205.757V203.813H198.76V205.757H188.788ZM207.019 215.729C206.107 215.729 205.351 215.633 204.751 215.441C204.175 215.225 203.743 214.853 203.455 214.325C203.191 213.773 203.059 213.017 203.059 212.057V200.609H201.871V198.809H203.311L203.707 195.641H205.435V198.809H208.495L207.955 200.609H205.435V211.301C205.435 212.285 205.627 212.957 206.011 213.317C206.395 213.653 206.959 213.821 207.703 213.821H208.855V215.729H207.019ZM211.247 215.729V198.809H213.155L213.407 200.573C213.791 199.949 214.295 199.469 214.919 199.133C215.543 198.773 216.203 198.593 216.899 198.593C217.475 198.593 217.919 198.629 218.231 198.701C218.567 198.749 218.855 198.833 219.095 198.953L218.987 201.077C218.699 200.933 218.375 200.837 218.015 200.789C217.655 200.717 217.223 200.681 216.719 200.681C215.975 200.681 215.327 200.885 214.775 201.293C214.247 201.677 213.863 202.205 213.623 202.877V215.729H211.247ZM223.999 215.729C223.111 215.729 222.475 215.597 222.091 215.333C221.707 215.069 221.467 214.613 221.371 213.965C221.275 213.293 221.227 212.345 221.227 211.121V202.373C221.227 201.437 221.335 200.717 221.551 200.213C221.767 199.685 222.151 199.325 222.703 199.133C223.279 198.917 224.107 198.809 225.187 198.809H231.775V215.729H229.399V200.717H225.403C224.803 200.717 224.371 200.801 224.107 200.969C223.867 201.137 223.723 201.401 223.675 201.761C223.627 202.097 223.603 202.577 223.603 203.201V211.373C223.603 212.045 223.639 212.561 223.711 212.921C223.783 213.257 223.927 213.497 224.143 213.641C224.383 213.761 224.743 213.821 225.223 213.821H228.355L228.103 215.729H223.999ZM235.68 198.773H237.588L237.84 200.537C238.2 199.937 238.716 199.457 239.388 199.097C240.084 198.713 240.936 198.521 241.944 198.521C243.336 198.521 244.392 198.833 245.112 199.457C245.832 200.081 246.192 201.005 246.192 202.229V215.729H243.816V203.021C243.816 202.133 243.552 201.497 243.024 201.113C242.52 200.705 241.824 200.501 240.936 200.501C240.168 200.501 239.556 200.657 239.1 200.969C238.644 201.281 238.296 201.689 238.056 202.193V215.729H235.68V198.773ZM254.204 215.945C252.476 215.945 251.24 215.597 250.496 214.901C249.776 214.181 249.416 213.185 249.416 211.913V209.501L251.54 209.213V211.805C251.54 212.213 251.612 212.609 251.756 212.993C251.9 213.377 252.164 213.689 252.548 213.929C252.932 214.169 253.496 214.289 254.24 214.289C255.128 214.289 255.824 214.133 256.328 213.821C256.832 213.485 257.084 212.813 257.084 211.805C257.084 210.821 256.952 210.101 256.688 209.645C256.448 209.165 255.944 208.745 255.176 208.385C254.984 208.289 254.732 208.181 254.42 208.061C254.108 207.917 253.772 207.773 253.412 207.629C253.052 207.485 252.716 207.341 252.404 207.197C252.116 207.053 251.9 206.945 251.756 206.873C251.132 206.513 250.652 206.165 250.316 205.829C249.98 205.493 249.74 205.109 249.596 204.677C249.476 204.245 249.416 203.729 249.416 203.129V202.625C249.416 201.257 249.812 200.249 250.604 199.601C251.42 198.953 252.692 198.629 254.42 198.629C256.172 198.629 257.42 198.929 258.164 199.529C258.908 200.129 259.28 201.101 259.28 202.445V204.821L257.084 205.109V202.661C257.084 201.725 256.844 201.101 256.364 200.789C255.908 200.453 255.236 200.285 254.348 200.285C253.508 200.285 252.884 200.417 252.476 200.681C252.092 200.921 251.84 201.233 251.72 201.617C251.624 202.001 251.576 202.373 251.576 202.733C251.576 203.573 251.66 204.173 251.828 204.533C252.02 204.869 252.392 205.193 252.944 205.505C253.208 205.649 253.544 205.817 253.952 206.009C254.384 206.177 254.828 206.357 255.284 206.549C255.74 206.741 256.172 206.945 256.58 207.161C257.612 207.641 258.32 208.181 258.704 208.781C259.088 209.357 259.28 210.197 259.28 211.301V211.697C259.28 213.113 258.92 214.181 258.2 214.901C257.48 215.597 256.148 215.945 254.204 215.945ZM262.716 198.809H270.276C271.26 198.809 271.956 198.941 272.364 199.205C272.772 199.445 273.012 199.913 273.084 200.609C273.18 201.305 273.228 202.301 273.228 203.597V212.165C273.228 213.101 273.12 213.833 272.904 214.361C272.712 214.865 272.328 215.225 271.752 215.441C271.2 215.633 270.372 215.729 269.268 215.729H265.092V221.453H262.716V198.809ZM265.092 200.717V213.821H269.088C269.664 213.821 270.072 213.737 270.312 213.569C270.576 213.401 270.732 213.137 270.78 212.777C270.828 212.417 270.852 211.937 270.852 211.337V203.165C270.852 202.493 270.804 201.989 270.708 201.653C270.636 201.293 270.492 201.053 270.276 200.933C270.06 200.789 269.712 200.717 269.232 200.717H265.092ZM281.671 215.873C280.255 215.873 279.187 215.681 278.467 215.297C277.747 214.913 277.255 214.421 276.991 213.821C276.727 213.197 276.595 212.561 276.595 211.913V202.589C276.595 201.917 276.727 201.281 276.991 200.681C277.255 200.081 277.759 199.589 278.503 199.205C279.271 198.821 280.399 198.629 281.887 198.629C283.279 198.629 284.347 198.821 285.091 199.205C285.859 199.565 286.387 200.045 286.675 200.645C286.987 201.245 287.143 201.881 287.143 202.553V211.589C287.143 212.357 286.987 213.077 286.675 213.749C286.363 214.397 285.811 214.913 285.019 215.297C284.251 215.681 283.135 215.873 281.671 215.873ZM281.671 213.929C282.679 213.929 283.447 213.713 283.975 213.281C284.503 212.825 284.767 212.153 284.767 211.265V202.985C284.767 202.193 284.515 201.581 284.011 201.149C283.507 200.693 282.799 200.465 281.887 200.465C280.975 200.465 280.255 200.681 279.727 201.113C279.223 201.545 278.971 202.169 278.971 202.985V211.481C278.971 212.273 279.223 212.885 279.727 213.317C280.231 213.725 280.879 213.929 281.671 213.929ZM290.7 215.729V198.809H292.608L292.86 200.573C293.244 199.949 293.748 199.469 294.372 199.133C294.996 198.773 295.656 198.593 296.352 198.593C296.928 198.593 297.372 198.629 297.684 198.701C298.02 198.749 298.308 198.833 298.548 198.953L298.44 201.077C298.152 200.933 297.828 200.837 297.468 200.789C297.108 200.717 296.676 200.681 296.172 200.681C295.428 200.681 294.78 200.885 294.228 201.293C293.7 201.677 293.316 202.205 293.076 202.877V215.729H290.7ZM304.964 215.729C304.052 215.729 303.296 215.633 302.696 215.441C302.12 215.225 301.688 214.853 301.4 214.325C301.136 213.773 301.004 213.017 301.004 212.057V200.609H299.816V198.809H301.256L301.652 195.641H303.38V198.809H306.44L305.9 200.609H303.38V211.301C303.38 212.285 303.572 212.957 303.956 213.317C304.34 213.653 304.904 213.821 305.648 213.821H306.8V215.729H304.964Z" fill="white"/>
                </svg>
            </div>
            <div className="btn-container">
                {(isLoaded) ?
                    <>
                        <button onClick={() => enterWebsite()}>
                            {welcometxt[lang].btn}
                        </button>
                        <div className="shine"></div>
                    </>
                    :
                    <span className="loading-dot"></span>
                }
            </div>
        </div>
    );
};

export default Welcome;