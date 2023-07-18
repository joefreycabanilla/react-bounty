import { motion } from "framer-motion";

export default function ScrollAnimationWrapper({ ...props }) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={props.className}
      {...props}
    >
      {props.children}
    </motion.div>
  );
}
