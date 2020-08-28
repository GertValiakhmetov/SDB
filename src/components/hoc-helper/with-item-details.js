import React, {Component} from "react";

const WithItemDetails = (View, getData, getImageUrl) => {

    return class extends Component {

        state = {
            item: null,
            image: null
        };

        componentDidMount() {
            this.updateItem();
        }

        componentDidUpdate(prevProps) {

            if (this.props.itemId !== prevProps.itemId) {
                this.updateItem();
            }
        }

        updateItem() {

            if (!this.props.itemId) {
                return;
            }

            getData(this.props.itemId)
                .then((item) => {
                    this.setState({
                        item,
                        image: getImageUrl(item)
                    });
                });
        }

        render() {

            const {item, image} = this.state;
            if (!item) {
                return <span>Select a item from a list</span>;
            }

            const {name} = item;
            return (
                <View {...this.props} name={name} image={image} item={item}/>
            )
        }
    }
}

export default WithItemDetails;