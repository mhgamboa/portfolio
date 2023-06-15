export interface TimelineItem {
  date: string;
  location: string;
  title: string;
  content: JSX.Element;
}

export const education: TimelineItem[] = [
  {
    date: "April 2007",
    location: "Clown college",
    title: "Masters in Beer tasting",
    content: (
      <p>
        Describe your experience at school, what you learned, what useful skills you have
        acquired etc.
      </p>
    ),
  },
  {
    date: "March 2003",
    location: "School of Business",
    title: "What did you study 101",
    content: (
      <p>
        Describe your experience at school, what you learned, what useful skills you have
        acquired etc.
      </p>
    ),
  },
];
