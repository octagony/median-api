import { Controller, Get, Param, Post } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}
  @Get()
  findAll() {
    return this.articlesService.findAll();
  }

  @Get('drafts')
  findDrafts() {
    return this.articlesService.findDrafts();
  }

  @Get(':id')
  findOneArticle(@Param('id') id: string) {
    return this.articlesService.findOne(+id);
  }

  @Post()
  createArticle(dto: CreateArticleDto) {
    return this.articlesService.create(dto);
  }
}
