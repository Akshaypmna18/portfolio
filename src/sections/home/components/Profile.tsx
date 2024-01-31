import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import profile from "@/assets/akshay.png";

function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "tween", duration: 0.2 }}
      className="grid place-items-center"
    >
      <Image
        src={profile}
        alt="Akshay's Picture"
        className="rounded-full border shadow bg-secondary"
        width={192}
        height={192}
        quality={95}
        priority={true}
      />
    </motion.div>
  );
}

export default Profile;
