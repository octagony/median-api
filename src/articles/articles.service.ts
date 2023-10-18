import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.article.findMany({
      where: {
        published: true,
      },
    });
  }

  async findDrafts() {
    return await this.prisma.article.findMany({
      where: {
        published: false,
      },
    });
  }
  async findOne(id: number) {
    return await this.prisma.article.findUnique({
      where: {
        id,
      },
    });
  }
  async create(dto: CreateArticleDto) {
    return await this.prisma.article.create({ data: dto });
  }

  async update(id: number, dto: UpdateArticleDto) {
    return this.prisma.article.update({
      where: {
        id,
      },
      data: dto,
    });
  }
}
