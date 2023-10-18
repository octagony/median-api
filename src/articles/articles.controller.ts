import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

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

  @Patch(':id')
  updateArticle(@Param('id') id: string, @Body() dto: UpdateArticleDto) {
    return this.articlesService.update(+id, dto);
  }

  @Delete('id')
  deleteArticle(@Param('id') id: string) {
    return this.articlesService.delete(+id);
  }
}
