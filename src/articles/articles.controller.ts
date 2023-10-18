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
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ArticleEntity } from './entities/article.entity';

@Controller('articles')
@ApiTags('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  findAll() {
    return this.articlesService.findAll();
  }

  @Get('drafts')
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  findDrafts() {
    return this.articlesService.findDrafts();
  }

  @Get(':id')
  @ApiOkResponse({ type: ArticleEntity })
  findOneArticle(@Param('id') id: string) {
    return this.articlesService.findOne(+id);
  }

  @Post()
  @ApiCreatedResponse({ type: ArticleEntity })
  createArticle(dto: CreateArticleDto) {
    return this.articlesService.create(dto);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ArticleEntity })
  updateArticle(@Param('id') id: string, @Body() dto: UpdateArticleDto) {
    return this.articlesService.update(+id, dto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ArticleEntity })
  deleteArticle(@Param('id') id: string) {
    return this.articlesService.delete(+id);
  }
}
