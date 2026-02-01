import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Card from "./Card";

// Circular Progress Component
interface CircularProgressProps {
  percentage: number;
  color: string;
  size?: number;
  strokeWidth?: number;
  gradientFrom: string;
  gradientTo: string;
}

const CircularProgress = ({
  percentage,
  color,
  size = 50,
  strokeWidth = 5,
  gradientFrom,
  gradientTo,
}: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#374151"
          strokeWidth={strokeWidth}
          fill="none"
          className="opacity-30"
        />
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`url(#gradient-${color})`}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient
            id={`gradient-${color}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={gradientFrom} />
            <stop offset="100%" stopColor={gradientTo} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// ViewsGraph Component with Circular Graph
const ViewsGraph = () => {
  const subscriberPercentage = 44.2;
  const nonSubscriberPercentage = 55.8;
  const totalViews = "35,647";
  const reachedAccounts = "2,190";

  return (
    <Card className="">
      <div className="space-y-6 flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <Heading type="h4" className="text-black">
            ПРОСМОТРЫ
          </Heading>
        </div>

        {/* Circular Graph Section */}
        <div className="flex flex-col items-center">
          <Paragraph className="text-sm text-black mb-4">
            1 сен - 30 сен
          </Paragraph>

          <div className="relative mb-6 flex flex-row">
            {/* Combined Donut Chart */}
            <div className="relative mr-10">
              {/* Non-subscribers circle (larger, background) */}
              <CircularProgress
                percentage={100}
                color="non-subscribers"
                size={180}
                strokeWidth={18}
                gradientFrom="#374151"
                gradientTo="#374151"
              />

              {/* Subscribers circle (on top) */}
              <div className="absolute inset-0">
                <CircularProgress
                  percentage={subscriberPercentage}
                  color="subscribers"
                  size={180}
                  strokeWidth={18}
                  gradientFrom="#4ECDC4"
                  gradientTo="#6DE7DE"
                />
              </div>

              {/* Center Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-center">
                  <Paragraph className="text-4xl font-bold">
                    {totalViews}
                  </Paragraph>
                  <Paragraph className="text-sm mt-1">Просмотров</Paragraph>
                </div>
              </div>
            </div>
            {/* Legend */}
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-linear-to-r from-[#4ECDC4] to-[#6DE7DE]"></div>
                <div className="flex flex-col">
                  <Paragraph className="text-black font-medium">
                    {subscriberPercentage}%
                  </Paragraph>
                  <Paragraph className="text-black">Подписчики</Paragraph>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-linear-to-r from-[#FF6B6B] to-[#FF8E8E]"></div>
                <div className="flex flex-col">
                  <Paragraph className="text-black font-medium">
                    {nonSubscriberPercentage}%
                  </Paragraph>
                  <Paragraph className="text-black">Неподписчики</Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reached Accounts */}
        <div className="pt-4 flex-row justify-between w-full">
          <div className="flex items-center justify-between">
            <Paragraph className="text-black">Охваченные аккаунты</Paragraph>
            <div className="flex flex-col items-center gap-2">
              <Paragraph className="text-xl font-bold text-black">
                {reachedAccounts}
              </Paragraph>
              <div className="flex items-center text-black">
                <Paragraph className="text-sm font-medium">65.5%</Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ViewsGraph;
