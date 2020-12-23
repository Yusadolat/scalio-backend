import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Post } from './posts.model';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}

    @Get()
    getAllPosts(): Post[]{
        return this.postsService.getAllPosts();
    }

    @Get(':id')
    getPostById(@Param('id', ParseIntPipe) id: number) {
      return this.postsService.findById(id);
    }
}
