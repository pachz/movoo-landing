import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Muvx">
      <svg
        width="561"
        height="129"
        viewBox="0 0 561 129"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="135" height="129" fill="url(#pattern0_1528_71)" />
        <rect
          x="190"
          y="27"
          width="371"
          height="75"
          fill="url(#pattern1_1528_71)"
        />
        <defs>
          <pattern
            id="pattern0_1528_71"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use transform="scale(0.00740741 0.00775194)" />
          </pattern>
          <pattern
            id="pattern1_1528_71"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use transform="scale(0.00269542 0.0133333)" />
          </pattern>
          <image
            id="image0_1528_71"
            width="135"
            height="129"
            preserveAspectRatio="none"
          />
          <image
            id="image1_1528_71"
            width="371"
            height="75"
            preserveAspectRatio="none"
          />
        </defs>
      </svg>
    </Link>
  );
}
