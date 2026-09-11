import { motion, useScroll, useTransform } from "framer-motion";

const PATHS = [
  "M-240 420 C 180 80, 480 640, 920 290 S 1640 120, 2060 450",
  "M-260 560 C 180 240, 470 760, 960 410 S 1630 260, 2080 540",
  "M-220 700 C 220 380, 540 860, 990 530 S 1620 390, 2070 670",
  "M-180 250 C 260 -20, 560 430, 1030 180 S 1630 20, 2100 300",
  "M-280 820 C 160 500, 500 980, 940 700 S 1600 560, 2120 800",
  "M-200 100 C 260 -180, 570 300, 1020 70 S 1650 -120, 2100 150",
];

const BackgroundPaths = () => {
  const { scrollY } = useScroll();
  const scrollOffset = useTransform(scrollY, (value) => value * -0.08);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[5] overflow-hidden"
      style={{ y: scrollOffset }}
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1920 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g>
          {PATHS.map((path, index) => (
            <motion.path
              key={path}
              d={path}
              stroke="var(--path-color)"
              strokeWidth={index % 2 === 0 ? 1.5 : 1}
              strokeLinecap="round"
              className="path-lines"
              initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
              animate={{
                pathLength: 0.55,
                pathOffset: [0, 1],
                opacity: index % 2 === 0 ? 0.7 : 0.5,
                x: [0, 16, -10, 0],
                y: [0, -10, 7, 0],
              }}
              transition={{
                pathLength: {
                  duration: 1.8,
                  delay: index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                },
                pathOffset: {
                  duration: 7 + index * 1.1,
                  delay: index * 0.2,
                  repeat: Infinity,
                  ease: "linear",
                },
                opacity: { duration: 1, delay: index * 0.15 },
                x: {
                  duration: 8 + index * 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                y: {
                  duration: 7 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />
          ))}
        </g>
      </svg>
    </motion.div>
  );
};

export default BackgroundPaths;