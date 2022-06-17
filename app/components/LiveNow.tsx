import { Group, Text } from "@mantine/core";
import { motion } from "framer-motion";

export default function LiveNow({ artist }: { artist?: string }) {
  return (
    <motion.div>
      <a
        href="https://twitch.tv/VIBEFESTLIVE"
        style={{
          textDecoration: "none",
        }}
      >
        <Group
          grow
          position="center"
          className="box"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.30)",
            borderRadius: "8px",
            border: "1px solid rgba(250, 0, 0, 0.50)",
          }}
          m="xl"
          p="md"
        >
          <Text size="xl">🔴 VIBEFEST is LIVE! {artist ?? ""}</Text>
        </Group>
      </a>
    </motion.div>
  );
}
