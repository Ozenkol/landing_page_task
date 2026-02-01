import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Card from "../ui/Card";

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
interface ViewsGraphProps {
  subscriberPercentage?: number;
  nonSubscriberPercentage?: number;
  totalViews?: string;
  reachedAccounts?: string;
  dateRange?: string;
  reachedAccountsChange?: string;
  reachedAccountsChangePercent?: string;
  cardClassName?: string;
  headingClassName?: string;
  paragraphClassName?: string;
  circularProgressSize?: number;
  circularProgressStrokeWidth?: number;
}

const ViewsGraph = ({
  subscriberPercentage = 44.2,
  nonSubscriberPercentage = 55.8,
  totalViews = "35,647",
  reachedAccounts = "2,190",
  dateRange = "1 сен - 30 сен",
  reachedAccountsChangePercent = "-65.5%",
  cardClassName = "rounded-[40px] p-6",
  headingClassName = "text-gray-600",
  paragraphClassName = "text-black",
  circularProgressSize = 240,
  circularProgressStrokeWidth = 18,
}: ViewsGraphProps) => {
  return (
    <Card className={cardClassName}>
      <div className="space-y-6 flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <Heading type="h4" className={headingClassName}>
            ПРОСМОТРЫ
          </Heading>
        </div>

        {/* Circular Graph Section */}
        <div className="flex flex-col items-center">
          <Paragraph className="text-sm text-black mb-4">{dateRange}</Paragraph>

          <div className="relative mb-6 flex flex-row items-center gap-6">
            {/* Combined Donut Chart */}
            <div className="relative">
              {/* Non-subscribers circle (larger, background) */}
              <CircularProgress
                percentage={100}
                color="non-subscribers"
                size={circularProgressSize}
                strokeWidth={circularProgressStrokeWidth}
                gradientFrom="#E2C5BB"
                gradientTo="#E2C5BB"
              />

              {/* Subscribers circle (on top) */}
              <div className="absolute inset-0">
                <CircularProgress
                  percentage={subscriberPercentage}
                  color="subscribers"
                  size={circularProgressSize}
                  strokeWidth={circularProgressStrokeWidth}
                  gradientFrom="#FF9297"
                  gradientTo="#FF775F"
                />
              </div>

              {/* Center Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-center">
                  <Heading type="h4" className="text-4xl font-bold">
                    {totalViews}
                  </Heading>
                  <Paragraph className="text-sm mt-1">Просмотров</Paragraph>
                </div>
              </div>
            </div>
            {/* Legend */}
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-linear-to-r from-[#E2C5BB] to-[#E2C5BB]"></div>
                <div className="flex flex-col">
                  <Paragraph className={`${paragraphClassName} font-medium`}>
                    {subscriberPercentage}%
                  </Paragraph>
                  <Paragraph className={paragraphClassName}>
                    Подписчики
                  </Paragraph>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-linear-to-r from-[#FF6B6B] to-[#FF8E8E]"></div>
                <div className="flex flex-col">
                  <Paragraph className={`${paragraphClassName} font-medium`}>
                    {nonSubscriberPercentage}%
                  </Paragraph>
                  <Paragraph className={paragraphClassName}>
                    Неподписчики
                  </Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reached Accounts */}
        <div className="pt-4 flex-row justify-between w-full">
          <div className="flex items-center justify-between">
            <Paragraph className={paragraphClassName}>
              Охваченные аккаунты
            </Paragraph>
            <div className="flex flex-col items-center gap-1">
              <Paragraph className="text-xl font-bold text-black">
                {reachedAccounts}
              </Paragraph>
              <div className="flex items-center text-gray-600">
                <Paragraph className="text-sm font-medium">
                  {reachedAccountsChangePercent}
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ViewsGraph;
