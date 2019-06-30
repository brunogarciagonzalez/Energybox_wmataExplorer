import React from "react";
import { Segment, Dropdown } from "semantic-ui-react";
import {
  lineOptions,
  carCountOptions,
  serviceOptions
} from "./../misc/filterOptions";

const FiltersContainer = props => {
  return (
    <Segment>
      <center>
        <Dropdown
          selection
          onChange={(_, data) =>
            props.handleFilterChange(data.value, "lineColorFilter")
          }
          placeholder="Filter By Line Color"
          options={lineOptions}
        />
        <Dropdown
          selection
          onChange={(_, data) =>
            props.handleFilterChange(data.value, "carCountFilter")
          }
          placeholder="Filter By Car Count"
          options={carCountOptions}
        />
        <Dropdown
          selection
          onChange={(_, data) =>
            props.handleFilterChange(data.value, "serviceTypeFilter")
          }
          placeholder="Filter By Service Type"
          options={serviceOptions}
        />
      </center>
    </Segment>
  );
};

export default FiltersContainer;
