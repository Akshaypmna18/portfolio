import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "tween", duration: 0.2 }}
      className="grid place-items-center"
    >
      <Image
        src="https://images.unsplash.com/photo-1584999734482-0361aecad844?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Akshay's Picture"
        className="rounded-full shadow"
        width={192}
        height={192}
        quality={95}
        priority={true}
      />
    </motion.div>
  );
}

export default Profile;
