import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="flex flex-col items-start px-6 py-16 lg:px-36">
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="w-full text-gray-400 text-sm">
        안녕하세요, 제 이름은
      </motion.p>

      <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="w-full text-4xl md:text-6xl font-bold mt-2 text-left">
        이형주입니다.
      </motion.h1>

      <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="w-full text-xl md:text-xl font-semibold text-gray-400 mt-2 text-left">
        Front End Engineer
      </motion.h2>

      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="w-full text-gray-400 text-xl md:text-xl mt-6 text-left">
        접근성과 품질을 모두 고려한 디지털 경험을 지향합니다.
      </motion.p>
    </section>
  );
}

export default Hero;
