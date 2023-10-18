import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.article.findMany({
      where: {
        published: true,
      },
    });
  }

  findDrafts() {
    return this.prisma.article.findMany({
      where: {
        published: false,
      },
    });
  }
}
