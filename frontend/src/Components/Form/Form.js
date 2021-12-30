import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../Store/Actions/posts";
import useStyles from "./styles";

const Form = ({ currentId, setCurrentId }) => {
    const [state, setState] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: ""
    });

    const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));

    const dispatch = useDispatch();

    useEffect(() => {       // Used for repopulating the form with the info of a post when we're wanting to update the info of the post
        if(post) setState(post);
    }, [post]);

    const classes = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();

        if(currentId === 0) {
            dispatch(createPost(state));
        }
        else {
            dispatch(updatePost(currentId, state));  
        }

        clear();
    }

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }

    const clear = () => {
        setCurrentId(0);
        setState({ creator: "", title: "", message: "", tags: "", selectedFile: "" });
    }

    return (
        <Paper className={ classes.paper }>
            <form className={ `${classes.root} ${classes.form}` } autoComplete="off" noValidate onSubmit={ handleSubmit }>
                <Typography variant="h6">{ currentId ? "Editing a Memory" : "Creating a Memory" }</Typography>
                <TextField name="creator" variant="outlined" 
                           label="Creator" fullWidth
                           value={ state.creator } onChange={ handleChange } />
                <TextField name="title" variant="outlined" 
                           label="Title" fullWidth
                           value={ state.title } onChange={ handleChange } />
                <TextField name="message" variant="outlined" 
                           label="Message" fullWidth
                           value={ state.message } onChange={ handleChange } />
                <TextField name="tags" variant="outlined" 
                           label="Tags" fullWidth
                           value={ state.tags } onChange={ handleChange } />
                <div className={ classes.fileInput }>
                    <FileBase type="file" multiple={false}
                              onDone={({ base64 }) => setState({ ...state, selectedFile: base64 })} />
                </div>
                <Button className={ classes.buttonSubmit } variant="contained" color="primary" size="large" type="submit" fullWidth>
                    Submit
                </Button>
                <Button variant="contained" color="secondary" size="small" onClick={ clear } fullWidth>
                    Clear
                </Button>
            </form>
        </Paper>
    )
}

export default Form;