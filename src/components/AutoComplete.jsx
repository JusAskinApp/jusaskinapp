import * as React from "react";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function FixedTags(props) {
  const suggestedInterests = [
    "Technology and Innovation",
    "Entrepreneurship and Startups",
    " Personal Development and Self-Improvement",
    "Career and Professional Growth",
    "Coding and Programming Languages",
    "Artificial Intelligence and Machine Learning",
    "Data Science and Analytics",
    "Design and User Experience (UX)",
    "Digital Marketing and Social Media",
    "Health and Fitness",
    "Finance and Investing",
    "Creative Writing and Storytelling",
    "Psychology and Mental Health",
    "Science and Space Exploration",
    "Travel and Adventure",
    "Sustainability and Environmental Conservation",
    "Film and Television",
    "Gaming and Game Development",
    "Fashion and Style",
    "Food and Cooking",
    "Mathematics and Statistics",
    "Physics",
    "Chemistry",
    "Biology",
    "History and World Cultures",
    "Literature and Writing",
    "Philosophy and Ethics",
    "Art and Art History",
    "Music",
    "Languages and Linguistics",
    "Geography and Geopolitics",
    "Environmental Science and Sustainability",
    "Economics",
    "Political Science and International Relations",
    "Sociology and Social Sciences",
    "Engineering and Technology",
    "Media and Communication Studies",
  ];

  const [value, setValue] = React.useState([]);

  const handleOnChange = (event, newValue) => {
    setValue(newValue);
    props.setSelectedTags(newValue);
  };

  return (
    <Autocomplete
      multiple
      id="fixed-tags-demo"
      value={props.selectedTags}
      onChange={handleOnChange}
      options={suggestedInterests} // Use the updated array of titles
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip label={option} {...getTagProps({ index })} color="primary" />
        ))
      }
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Interest" placeholder="Search Interest" />
      )}
    />
  );
}
