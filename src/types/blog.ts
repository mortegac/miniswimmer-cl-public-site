export type Blog = {
	_id: number;
	title: string;
	slug?: any;
	metadata: string;
	mainImage: any;
	author?: string;
	url: string;
	tags?: string[];
	publishedAt?: string;
};
