import { useEffect, useState } from "react";

import { Heading, HStack, List, ListItem, Text } from "@chakra-ui/layout";

import { getLeaderboardData, Leaderboard as LeaderboardType } from "../library/leaderboard";
import { Button, Skeleton } from "@chakra-ui/react";

const statistics = [
  ["홋치홋치", "AttackGame"],
  ["스키스키", "BingleGame"],
  ["깨부깨부", "CrashGame"],
  ["폴짝폴짝", "CrossGame"],
  ["돌려돌려", "JumpGame"],
  ["띠용띠용", "PassGame"],
  ["빠샤빠샤", "PunctureGame"],
  ["요리조리", "RunGame"],
  ["빵야빵야", "SpreadGame"],
  ["잡아잡아", "StickyGame"],
];

const Leaderboard = () => {
  const [leaderboardIndex, setLeaderboardIndex] = useState(0);

  const [title, setTitle] = useState("");
  const [leaderboard, setLeaderboard] = useState<LeaderboardType[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    updateLeaderboard();
  }, [leaderboardIndex]);

  async function updateLeaderboard() {
    setLoading(true);

    const title = statistics[leaderboardIndex][0];
    const statistic = statistics[leaderboardIndex][1];

    const titleId = process.env.REACT_APP_PLAYFAB_TITLE_ID ?? "NONE_TITLE_ID";
    const secretKey = process.env.REACT_APP_PLAYFAB_SECRET_KEY ?? "NONE_SECRET_KEY";

    let leaderboard: LeaderboardType[] = [];
    leaderboard = await getLeaderboardData(titleId, secretKey, statistic);

    setTitle(title);
    setLeaderboard(leaderboard);

    setLoading(false);
  }

  return loading ? (
    <>
      <Text mt="4" fontSize="32">
        로딩중...
      </Text>
      <Skeleton my="4" height="535px" minWidth="360px" />
    </>
  ) : (
    <>
      <HStack gap="4" mt="4">
        <Button
          onClick={() => {
            let i = leaderboardIndex;
            if (i - 1 < 0) {
              i = statistics.length;
            }
            setLeaderboardIndex(i - 1);
          }}
        >
          {"<"}
        </Button>
        <Heading as="h2">{title}</Heading>
        <Button
          onClick={() => {
            let i = leaderboardIndex;
            if (i + 1 >= statistics.length) {
              i = -1;
            }
            setLeaderboardIndex(i + 1);
          }}
        >
          {">"}
        </Button>
      </HStack>
      {leaderboard.length > 0 ? (
        <List display="flex" flexDir="column" alignItems="center" my="4">
          {leaderboard.map((data, i) => {
            return (
              <ListItem key={i}>
                <Text fontSize="lg">{`[${data.Position + 1}위] ${data.DisplayName} - ${data.StatValue}점`}</Text>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <Text>아직 순위가 없어요!</Text>
      )}
    </>
  );
};

export default Leaderboard;
