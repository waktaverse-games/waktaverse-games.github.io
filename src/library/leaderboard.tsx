export type Leaderboard = {
  DisplayName: string;
  Position: number;
  StatValue: number;
};

export async function getLeaderboardData(titleId: string, secretKey: string, statistic: string) {
  const res = await fetch(`https://${titleId}.playfabapi.com/Server/GetLeaderboard`, {
    method: "POST",
    body: JSON.stringify({
      MaxResultsCount: 20,
      StartPosition: 0,
      StatisticName: statistic,
    }),
    headers: [
      ["Content-Type", "application/json"],
      ["Accept-Encoding", "gzip"],
      ["X-SecretKey", secretKey],
    ],
  });
  const json = await res.json();
  return json.data.Leaderboard as Leaderboard[];
}
