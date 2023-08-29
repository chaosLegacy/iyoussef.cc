/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Project } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function ProjectUpdateForm(props) {
  const {
    id: idProp,
    project: projectModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    coverImage: "",
    description: "",
    githubURL: "",
    previewURL: "",
    tools: [],
    pinned: false,
    type: "",
    createdAt: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [coverImage, setCoverImage] = React.useState(initialValues.coverImage);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [githubURL, setGithubURL] = React.useState(initialValues.githubURL);
  const [previewURL, setPreviewURL] = React.useState(initialValues.previewURL);
  const [tools, setTools] = React.useState(initialValues.tools);
  const [pinned, setPinned] = React.useState(initialValues.pinned);
  const [type, setType] = React.useState(initialValues.type);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = projectRecord
      ? { ...initialValues, ...projectRecord }
      : initialValues;
    setName(cleanValues.name);
    setCoverImage(cleanValues.coverImage);
    setDescription(cleanValues.description);
    setGithubURL(cleanValues.githubURL);
    setPreviewURL(cleanValues.previewURL);
    setTools(cleanValues.tools ?? []);
    setCurrentToolsValue("");
    setPinned(cleanValues.pinned);
    setType(cleanValues.type);
    setCreatedAt(cleanValues.createdAt);
    setErrors({});
  };
  const [projectRecord, setProjectRecord] = React.useState(projectModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Project, idProp)
        : projectModelProp;
      setProjectRecord(record);
    };
    queryData();
  }, [idProp, projectModelProp]);
  React.useEffect(resetStateValues, [projectRecord]);
  const [currentToolsValue, setCurrentToolsValue] = React.useState("");
  const toolsRef = React.createRef();
  const validations = {
    name: [{ type: "Required" }],
    coverImage: [{ type: "Required" }],
    description: [{ type: "Required" }],
    githubURL: [{ type: "Required" }],
    previewURL: [],
    tools: [],
    pinned: [],
    type: [{ type: "Required" }],
    createdAt: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          coverImage,
          description,
          githubURL,
          previewURL,
          tools,
          pinned,
          type,
          createdAt,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Project.copyOf(projectRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProjectUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              coverImage,
              description,
              githubURL,
              previewURL,
              tools,
              pinned,
              type,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Cover image"
        isRequired={true}
        isReadOnly={false}
        value={coverImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              coverImage: value,
              description,
              githubURL,
              previewURL,
              tools,
              pinned,
              type,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.coverImage ?? value;
          }
          if (errors.coverImage?.hasError) {
            runValidationTasks("coverImage", value);
          }
          setCoverImage(value);
        }}
        onBlur={() => runValidationTasks("coverImage", coverImage)}
        errorMessage={errors.coverImage?.errorMessage}
        hasError={errors.coverImage?.hasError}
        {...getOverrideProps(overrides, "coverImage")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              coverImage,
              description: value,
              githubURL,
              previewURL,
              tools,
              pinned,
              type,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Github url"
        isRequired={true}
        isReadOnly={false}
        value={githubURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              coverImage,
              description,
              githubURL: value,
              previewURL,
              tools,
              pinned,
              type,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.githubURL ?? value;
          }
          if (errors.githubURL?.hasError) {
            runValidationTasks("githubURL", value);
          }
          setGithubURL(value);
        }}
        onBlur={() => runValidationTasks("githubURL", githubURL)}
        errorMessage={errors.githubURL?.errorMessage}
        hasError={errors.githubURL?.hasError}
        {...getOverrideProps(overrides, "githubURL")}
      ></TextField>
      <TextField
        label="Preview url"
        isRequired={false}
        isReadOnly={false}
        value={previewURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              coverImage,
              description,
              githubURL,
              previewURL: value,
              tools,
              pinned,
              type,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.previewURL ?? value;
          }
          if (errors.previewURL?.hasError) {
            runValidationTasks("previewURL", value);
          }
          setPreviewURL(value);
        }}
        onBlur={() => runValidationTasks("previewURL", previewURL)}
        errorMessage={errors.previewURL?.errorMessage}
        hasError={errors.previewURL?.hasError}
        {...getOverrideProps(overrides, "previewURL")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              coverImage,
              description,
              githubURL,
              previewURL,
              tools: values,
              pinned,
              type,
              createdAt,
            };
            const result = onChange(modelFields);
            values = result?.tools ?? values;
          }
          setTools(values);
          setCurrentToolsValue("");
        }}
        currentFieldValue={currentToolsValue}
        label={"Tools"}
        items={tools}
        hasError={errors?.tools?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("tools", currentToolsValue)
        }
        errorMessage={errors?.tools?.errorMessage}
        setFieldValue={setCurrentToolsValue}
        inputFieldRef={toolsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Tools"
          isRequired={false}
          isReadOnly={false}
          value={currentToolsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.tools?.hasError) {
              runValidationTasks("tools", value);
            }
            setCurrentToolsValue(value);
          }}
          onBlur={() => runValidationTasks("tools", currentToolsValue)}
          errorMessage={errors.tools?.errorMessage}
          hasError={errors.tools?.hasError}
          ref={toolsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "tools")}
        ></TextField>
      </ArrayField>
      <SwitchField
        label="Pinned"
        defaultChecked={false}
        isDisabled={false}
        isChecked={pinned}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              coverImage,
              description,
              githubURL,
              previewURL,
              tools,
              pinned: value,
              type,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.pinned ?? value;
          }
          if (errors.pinned?.hasError) {
            runValidationTasks("pinned", value);
          }
          setPinned(value);
        }}
        onBlur={() => runValidationTasks("pinned", pinned)}
        errorMessage={errors.pinned?.errorMessage}
        hasError={errors.pinned?.hasError}
        {...getOverrideProps(overrides, "pinned")}
      ></SwitchField>
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              coverImage,
              description,
              githubURL,
              previewURL,
              tools,
              pinned,
              type: value,
              createdAt,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      >
        <option
          children="Web"
          value="WEB"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Mobile"
          value="MOBILE"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Created at"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={createdAt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              coverImage,
              description,
              githubURL,
              previewURL,
              tools,
              pinned,
              type,
              createdAt: value,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || projectModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || projectModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
