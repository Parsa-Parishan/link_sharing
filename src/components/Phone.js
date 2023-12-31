import React, { useEffect, useState } from "react";
import placeHolder from "../assets/placeholder-image.png";

export default function Phone({ list, profile }) {
  const [profilePicture, setProfilePicture] = useState(profile.picture);

  useEffect(() => {
    if (profile.picture) {
      // If there is a profile picture, read the file and set it as the image source
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(profile.picture);
    } else {
      // If there is no profile picture, set the placeholder image
      setProfilePicture(placeHolder);
    }
  }, [profile.picture]);

  const svgWidth = 308; // Set the width of your SVG
  let textWidth = 0;
  if (profile.firstName && profile.lastName) {
    textWidth = (profile.firstName.length + profile.lastName.length + 1) * 8;
  } else if (profile.lastName) {
    textWidth = profile.lastName.length * 8;
  } else if (profile.firstName) {
    textWidth = profile.firstName.length * 8;
  }
  let emailWidth = profile.email && profile.email.length * 8;

  return (
    <div className="phone">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="308"
        height="632"
        fill="none"
        viewBox="0 0 308 632"
      >
        <path
          stroke="#737373"
          d="M1 54.5C1 24.953 24.953 1 54.5 1h199C283.047 1 307 24.953 307 54.5v523c0 29.547-23.953 53.5-53.5 53.5h-199C24.953 631 1 607.047 1 577.5v-523Z"
        />
        <path
          fill="#fff"
          stroke="#737373"
          d="M12 55.5C12 30.923 31.923 11 56.5 11h24C86.851 11 92 16.149 92 22.5c0 8.008 6.492 14.5 14.5 14.5h95c8.008 0 14.5-6.492 14.5-14.5 0-6.351 5.149-11.5 11.5-11.5h24c24.577 0 44.5 19.923 44.5 44.5v521c0 24.577-19.923 44.5-44.5 44.5h-195C31.923 621 12 601.077 12 576.5v-521Z"
        />

        <defs>
          <clipPath id="roundImage">
            <circle cx="153.5" cy="112" r="48" fill="#EEE" />
          </clipPath>
        </defs>

        <image
          href={profilePicture || placeHolder} // Provide the path to your image
          x="105.5" // Adjust the x-coordinate as needed
          y="64" // Adjust the y-coordinate as needed
          width="96" // Adjust the width as needed
          height="96" // Adjust the height as needed
          clipPath="url(#roundImage)"
        />

        <g>
          {profile.firstName || profile.lastName ? (
            <text
              x={(svgWidth - textWidth) / 2} // Center the text horizontally
              y="185" // Adjust the spacing as needed
              fill="#000000"
            >
              {profile.firstName} {profile.lastName && profile.lastName}
            </text>
          ) : (
            <rect
              width="160"
              height="16"
              x="73.5"
              y="185"
              fill="#EEE"
              rx="8"
            ></rect>
          )}
        </g>

        <g>
          {profile.email ? (
            <text
              x={(svgWidth - emailWidth) / 2} // Center the text horizontally
              y="214"
              fill="#000000"
            >
              {profile.email}
            </text>
          ) : (
            <rect
              width="72"
              height="8"
              x="117.5"
              y="214"
              fill="#EEE"
              rx="4"
            ></rect>
          )}
        </g>
        <rect width="237" height="44" x="35" y="392" fill="#EEE" rx="8"></rect>
        <rect width="237" height="44" x="35" y="442" fill="#EEE" rx="8"></rect>
        <rect width="237" height="44" x="35" y="492" fill="#EEE" rx="8"></rect>
        <rect width="237" height="44" x="35" y="542" fill="#EEE" rx="8"></rect>
        {list.map(
          (item, index) =>
            index < 5 && (
              <g key={index}>
                <rect
                  x={35}
                  y={342 + index * 50} // Adjust the spacing as needed
                  width={237}
                  height={44}
                  rx={8}
                  fill={
                    item.platform == "github"
                      ? "black"
                      : item.platform == "youtube"
                      ? "#FF0000"
                      : item.platform == "linkedin"
                      ? "#0A66C2"
                      : item.platform == "twitter"
                      ? " #1DA1F2"
                      : "#ed4956"
                  }
                />
                <text
                  x={45}
                  y={369 + index * 50} // Adjust the spacing as needed
                  fill="#ffffff"
                >
                  {item.platform}
                </text>
              </g>
            )
        )}
      </svg>
    </div>
  );
}
