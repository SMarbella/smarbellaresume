import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { skill: "Python", level: 92 },
  { skill: "R", level: 88 },
  { skill: "SQL", level: 85 },
  { skill: "Machine Learning", level: 90 },
  { skill: "Data Viz", level: 95 },
  { skill: "Cloud/DB", level: 80 },
  { skill: "Statistics", level: 87 },
  { skill: "Web Dev", level: 75 },
];

const SkillsRadar = () => (
  <ResponsiveContainer width="100%" height={320}>
    <RadarChart data={data} cx="50%" cy="50%" outerRadius="75%">
      <PolarGrid stroke="hsl(220, 14%, 18%)" />
      <PolarAngleAxis
        dataKey="skill"
        tick={{ fill: "hsl(200, 20%, 72%)", fontSize: 12, fontFamily: "Space Grotesk" }}
      />
      <PolarRadiusAxis
        angle={90}
        domain={[0, 100]}
        tick={false}
        axisLine={false}
      />
      <Radar
        name="Proficiency"
        dataKey="level"
        stroke="hsl(174, 72%, 56%)"
        fill="hsl(174, 72%, 56%)"
        fillOpacity={0.2}
        strokeWidth={2}
      />
      <Tooltip
        contentStyle={{
          background: "hsl(220, 18%, 10%)",
          border: "1px solid hsl(220, 14%, 18%)",
          borderRadius: "8px",
          color: "hsl(200, 20%, 92%)",
          fontFamily: "Space Grotesk",
          fontSize: "13px",
        }}
        formatter={(value: number) => [`${value}%`, "Proficiency"]}
      />
    </RadarChart>
  </ResponsiveContainer>
);

export default SkillsRadar;
