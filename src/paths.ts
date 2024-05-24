const paths = {
	home() {
		return "/";
	},
	topicShow(topic: string) {
		return `/topics/${topic}`;
	},
	postCreate(topic: string) {
		return `/topics/${topic}/posts/new`;
	},
	postShow(topic: string, id: string) {
		return `/topics/${topic}/posts/${id}`;
	},
};

export default paths;
